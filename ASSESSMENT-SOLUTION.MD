# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Nicolae Danu and optionally contact information

## Steps to run the tests
 ```
> npm install
> npm run e2e
> npm run report
```
Go to `http://localhost:8080/` to see the report

## Remarks 

The application documentation was easy to follow and I didn't found any issue in starting the application. The e2e tests required some tweaks before running successfully.

### Implementation steps - How i wrote the asignment

1. I started by uploading the initial application to github.

https://github.com/nicolaedanu/tnt-star-wars/commit/ad0786d6887b4e275b9ebc514ed98b984207d30e

2. Add a .gitignore file then update the protractor/cucumber related npm packages to the latest version.

https://github.com/nicolaedanu/tnt-star-wars/commit/0eff7cd588a4c73b14708895b70ab4dcbe2b1483

https://github.com/nicolaedanu/tnt-star-wars/commit/c147f28a20cb59af43804db93a22440d816ead18

3. Then I had to make some changes to the protractor.config.js (point to the feature and step files). Start fresh with the page object and steps file. And decided to add reports to track the progress.

https://github.com/nicolaedanu/tnt-star-wars/commit/2036e1c24eda281089db9efffa97c1758d2e6475

4. I created the basic test and start working on the page object file.

https://github.com/nicolaedanu/tnt-star-wars/commit/66494669ee89a7fd690c3761d95fed805a244be9

5. I updated the app component.html file and added more testing friendly attributes like id and name. 

https://github.com/nicolaedanu/tnt-star-wars/commit/1342d93bc1d36f56f4ffa1e8d4661f8e196e7eba

6. I continued expanding the search by name tests by introducing validation (expects).

https://github.com/nicolaedanu/tnt-star-wars/commit/e64a4d99d6c0da357ab95b892af4c84e25b38350

7. After name search I continue with planet search tests and use Scenario Outline.

https://github.com/nicolaedanu/tnt-star-wars/commit/f736851dc305f580304c149326d1bae486220f9d

8. Next I continued with the multiple results name test where i decided to use table data.

https://github.com/nicolaedanu/tnt-star-wars/commit/c19e34d03d0916331fec5ea8929257a6615453b4

9. I finished the implementation with the not found step and some refactoring. The search-form page object become to big and i decided to split it in 3; search-form where we handle the elements and functions (select option and search) of card-body, planets that handle the elements of planet-result and people that handle the elements of people result.

https://github.com/nicolaedanu/tnt-star-wars/commit/a07978df6df1e4eaa61775246f71ad165b334115

10. A few more changes and update the assessment-solution document.
