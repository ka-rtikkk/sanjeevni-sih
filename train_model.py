import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib

# Load data
DATA_PATH = 'training_data.xlsx'
df = pd.read_excel(DATA_PATH)

# Assume last column is the target
y = df.iloc[:, -1]
X = df.iloc[:, :-1]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Evaluate
y_pred = clf.predict(X_test)
acc = accuracy_score(y_test, y_pred)
print(f'Validation Accuracy: {acc:.2f}')

# Save model
joblib.dump(clf, 'rf_model.joblib')
print('Model saved as rf_model.joblib')
