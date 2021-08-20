import pandas as pd
csv_url = 'https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/08-15-2021.csv'
df = pd.read_csv(csv_url)
print(df)