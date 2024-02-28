---
id: "773a317b-0d90-4d40-8928-6f799cd95fad"
dir: "projects"
slug: "analyzing-consumer-behaviour"
name: "Analyzing Consumer Behavior"
project_type: "personal"
project_category: "data space"
is_published: true
end_year: 2023
is_repo: false
repo_url: ""
repo_platform: ""
---

# Analyzing Consumer Behavior: Unveiling Insights through Market Basket Analysis

Research Date: October 2023

**[Market Basket Analysis](https://www.kaggle.com/datasets/aslanahmedov/market-basket-analysis/data)** from **[Kaggle](https://www.kaggle.com)**.

NOTEBOOK LINK: [acb.noeyislearning.dev](https://acb.noeyislearning.dev)

REPOSITORY LINK: [noeyislearning/analyzing-consumer-behaviour](https://github.com/noeyislearning/analyzing-consumer-behaviour)

---

## Overview

In this analysis, we delve into the fascinating world of retail data to unlock valuable insights for businesses. Market Basket Analysis is a powerful technique that allows retailers to understand customer behavior, identify item associations, and offer personalized recommendations. The primary goal of this notebook is to help retailers optimize their product catalog, enhance marketing strategies, and ultimately improve customer engagement and satisfaction.

## Data

- Dataset: The dataset used in this analysis is sourced from **[Kaggle](https://www.kaggle.com)**. It consists of transaction records including information such as item name, quantity, date, price, customer ID, and country.

- Preprocessing:
  - Handled missing values: Removed rows with missing values in the "Itemname" and "CustomerID" columns.
  - Converted the "Date" column to datetime format.

## Methodology

### Key Steps

- Data loading, inspection, and preprocessing
- Exploratory Data Analysis (EDA)
- Transaction data formatting for Apriori algorithm
- Aprirori algorithm implementation
  - Parameters used: Support threshold = 0.01, Confidence threshold = 0.5
- Rule evaluation and selection
- Key Decisions:
  - Chose Market Basket Analysis to uncover hidden patterns in customer purchasing habits.
  - Set thresholds for support and confidence based on the dataset characteristics and business objectives.

### Key Insights

- Identified significant associations between products, such as:
  - (REGENCY SUGAR BOWL GREEN) ➔ (REGENCY MILK JUG PINK) with high lift (56.60)
  - (SET/6 RED SPOTTY PAPER PLATES) ➔ (SET/6 RED SPOTTY PAPER CUPS) with high confidence (0.72)

## Visualizations

🔗 You can find the visualizations in the notebook by clicking this [link](https://acb.noeyislearning.dev).

- Histograms and box plots illustrating the distribution of quantity and price.
- Time series plot showing sales trends over months and years.
- Bar chart visualizing the number of transactions by country.
- Scatter plot depicting support vs. confidence for association rules.
- Network graph showcasing the top association rules.

## Business Recommendations:

- Utilize the identified associations for product bundling and cross-selling opportunities.
- Optimize product placement based on frequent item associations.
- Personalize recommendations to customers based on their past purchases.

## Technologies Used

- Libraries and tools used: Pandas, NumPy, Seaborn, Matplotlib, mlxtend, NetworkX.

### Conclusion

This project has demonstrated the power of Market Basket Analysis in extracting actionable insights from retail transaction data. By leveraging association rules, businesses can enhance their strategies for product offerings, marketing, and customer engagement, ultimately driving growth and satisfaction in the retail landscape.
