import numpy as np
import pickle

def predict(df):
    cols = ['PM25', 'PM10', 'NO', 'NO2', 'NOx', 'NH3', 'CO', 'SO2', 'O3', 'Benzene', 'Toluene', 'Xylene']

    for col in cols:
        df[col] = df[col].astype(float) 

    cities = ['Ahmedabad', 'Aizawl', 'Amaravati', 'Amritsar', 'Bengaluru', 'Bhopal', 'Brajrajnagar', 'Chandigarh', 'Chennai',
              'Coimbatore', 'Delhi', 'Ernakulam', 'Gurugram', 'Guwahati', 'Hyderabad', 'Jaipur', 'Jorapokhar', 'Kochi', 'Kolkata',
              'Lucknow', 'Mumbai', 'Patna', 'Shillong', 'Talcher', 'Thiruvananthapuram', 'Visakhapatnam']

    city_map = {city: index + 12 for index, city in enumerate(cities)}

    city_index = city_map[df['city'].iloc[0]]
    
    x = np.zeros(38)
    x[:len(cols)] = [df[col].iloc[0] for col in cols]

    x[city_index] = 1
    
    model = pickle.load(open('aqi_daily_model.pickle', 'rb'))
    aqi = model.predict(x.reshape(1, -1))
    print('Aqi value is:', aqi[0])
    
    if aqi <= 50:
        return 'GOOD'
    elif aqi <= 100:
        return 'SATISFACTORY'
    elif aqi <= 200:
        return 'MODERATE'
    elif aqi <= 300:
        return 'POOR'
    elif aqi <= 400:
        return 'VERY POOR'
    else:
        return 'SEVERE'