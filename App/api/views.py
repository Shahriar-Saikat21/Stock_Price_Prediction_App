from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from bdshare import get_hist_data,get_current_trade_data
from datetime import datetime,timedelta
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import load_model # type: ignore

model = load_model('../ML_Model/model_EHL.h5')
model_1 = load_model('../ML_Model/model_ACI.h5')
model_2 = load_model('../ML_Model/model_ABBANK.h5')

def prediction(company,today,last_Date):
    df = get_current_trade_data(company) 
    arr = df.to_numpy()
    
    today_rate = {'name':arr[0][0],'high':arr[0][2],'low':arr[0][3],'value':arr[0][8],'volume':arr[0][9]}

    dt = get_hist_data(last_Date,today,company)
    data = dt.reset_index()['close']
    prev_close = float(data[0])
    scaler = MinMaxScaler(feature_range=(0,1))
    data = scaler.fit_transform(np.array(data).reshape(-1,1))
    data = data[0:100]
    x_train = data.reshape(data.shape[1],data.shape[0],1)

    result = [[]]

    if(company == 'EHL'):
        result = model.predict(x_train)
    elif(company == 'ACI'):
        result = model_1.predict(x_train)
    elif(company == 'ABBANK'):
        result = model_2.predict(x_train)
    
    result = scaler.inverse_transform(result)
    prediction_today = result[0][0]
    print(prediction_today)

    decision = -1
    if(prediction_today > prev_close):
        decision = 1
    else:
        decision = 0

    return {'close': prediction_today,'today':today_rate,'result':decision}


@api_view(['GET'])
def home(request):
    current_date = datetime.now()
    time_period = current_date - timedelta(days=365)
    today = current_date.strftime('%y-%m-%d')
    last_Date = time_period.strftime('%y-%m-%d')

    try:
        result_prediction = []

        company_EHL = prediction('EHL',today,last_Date)
        company_ACI = prediction('ACI',today,last_Date)
        company_ABBANK = prediction('ABBANK',today,last_Date)

        result_prediction.append(company_EHL)
        result_prediction.append(company_ACI)
        result_prediction.append(company_ABBANK)
        
        return Response({'success': True,'result' : result_prediction})   
    except:
        return Response({'success': False, 'message': 'Market is closed now !!!'})


