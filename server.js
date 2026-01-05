const express = require("express");
const app = express()
const cors = require("cors")
app.use(express.json())
const data = {
  "status": "success",
  "genai_insights": {
    "data_quality_issues": {
      "Completeness": {
        "issue": "Missing values detected in critical fields",
        "affected_columns": [
          "email",
          "phone_number",
          "kyc_document_id"
        ],
        "description": "The columns email, phone_number, and kyc_document_id show null ratios of 0.03, 0.08, and 0.15 respectively, indicating incomplete customer records."
      },
      "Accuracy": {
        "issue": "Potentially incorrect values identified",
        "affected_columns": [
          "email",
          "phone_number"
        ],
        "description": "Some email addresses do not follow standard formats and several phone numbers have invalid lengths."
      },
      "Consistency": {
        "issue": "Inconsistent categorical values",
        "affected_columns": [
          "account_status"
        ],
        "description": "The account_status column contains values such as 'active', 'Active', and 'ACTIVE', indicating inconsistent casing."
      },
      "Validity": {
        "issue": "Out-of-range or logically invalid values",
        "affected_columns": [
          "balance",
          "date_of_birth"
        ],
        "description": "The balance column contains negative values beyond allowed overdraft limits, and date_of_birth includes future dates for 1% of records."
      },
      "Timeliness": {
        "issue": "Delayed data updates",
        "affected_columns": [
          "last_updated_at"
        ],
        "description": "Approximately 20% of records have not been updated in the last 180 days, indicating stale data."
      },
      "Uniqueness": {
        "issue": "Duplicate records detected",
        "affected_columns": [
          "email",
          "phone_number"
        ],
        "description": "Duplicate email and phone_number values were found, reducing overall uniqueness of customer identifiers."
      },
      "Integrity": {
        "issue": "Broken referential relationships",
        "affected_columns": [
          "customer_id"
        ],
        "description": "Some customer_id values do not have corresponding entries in the master customer table."
      }
    },
    "remediation_actions": [
      {
        "action": "Standardize categorical values",
        "priority": 1,
        "description": "Normalize casing and allowed values for the account_status column."
      },
      {
        "action": "Validate identifiers and formats",
        "priority": 2,
        "description": "Apply stricter validation rules for email and phone_number fields."
      },
      {
        "action": "Resolve missing and stale data",
        "priority": 3,
        "description": "Impute missing values where appropriate and refresh records that have not been updated recently."
      }
    ],
    "regulatory_compliance_risks": [
      "Incomplete or inaccurate KYC information may lead to non-compliance with AML and customer due diligence regulations."
    ],
    "composite_dqs": 0.78,
    "dimension_scores": {
      "Completeness": 0.72,
      "Validity": 0.74,
      "Consistency": 0.82,
      "Timeliness": 0.8,
      "Uniqueness": 0.77,
      "Accuracy": 0.81
    }
  }
}
app.use(cors())
app.get("/", (req, res)=>{
    res.json(data);
})