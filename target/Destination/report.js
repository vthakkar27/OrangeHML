$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/feature/Ragistration.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "user should not be able to login with Invalid Credentials",
  "description": "and error message should display",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@InvalidCredential"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enter invalid name \"\u003cInvalid_username\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter invalid password \"\u003cInvalid_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should not be able to login and \"\u003cerrorMessage\u003e\" should displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Invalid_username",
        "Invalid_password",
        "errorMessage"
      ],
      "line": 23,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "admin321",
        "Invalid credentials"
      ],
      "line": 24,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "Adminad",
        "admin123",
        "Invalid credentials"
      ],
      "line": 25,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 26,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 27,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13566810300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user should not be able to login with Invalid Credentials",
  "description": "and error message should display",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@InvalidCredential"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enter invalid name \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter invalid password \"admin321\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should not be able to login and \"Invalid credentials\" should displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 135178400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enter_invalid_name(String)"
});
formatter.result({
  "duration": 267031700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin321",
      "offset": 29
    }
  ],
  "location": "MyStepDefs.user_enter_invalid_password(String)"
});
formatter.result({
  "duration": 224054900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1020392799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 38
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_login_and_should_displayed(String)"
});
formatter.result({
  "duration": 122443399,
  "status": "passed"
});
formatter.after({
  "duration": 2213726799,
  "status": "passed"
});
formatter.before({
  "duration": 3884723800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user should not be able to login with Invalid Credentials",
  "description": "and error message should display",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@InvalidCredential"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enter invalid name \"Adminad\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter invalid password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should not be able to login and \"Invalid credentials\" should displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 47299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adminad",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enter_invalid_name(String)"
});
formatter.result({
  "duration": 256960200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 29
    }
  ],
  "location": "MyStepDefs.user_enter_invalid_password(String)"
});
formatter.result({
  "duration": 305927101,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 657170600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 38
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_login_and_should_displayed(String)"
});
formatter.result({
  "duration": 115200800,
  "status": "passed"
});
formatter.after({
  "duration": 342799700,
  "status": "passed"
});
formatter.before({
  "duration": 96927949899,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "user should not be able to login with Invalid Credentials",
  "description": "and error message should display",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@InvalidCredential"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enter invalid name \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter invalid password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should not be able to login and \"Username cannot be empty\" should displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enter_invalid_name(String)"
});
formatter.result({
  "duration": 218905600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 29
    }
  ],
  "location": "MyStepDefs.user_enter_invalid_password(String)"
});
formatter.result({
  "duration": 342853000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 219567900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 38
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_login_and_should_displayed(String)"
});
formatter.result({
  "duration": 119219200,
  "status": "passed"
});
formatter.after({
  "duration": 215475100,
  "status": "passed"
});
formatter.before({
  "duration": 6618923200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "user should not be able to login with Invalid Credentials",
  "description": "and error message should display",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@InvalidCredential"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enter invalid name \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter invalid password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should not be able to login and \"Password cannot be empty\" should displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 39199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enter_invalid_name(String)"
});
formatter.result({
  "duration": 216146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "MyStepDefs.user_enter_invalid_password(String)"
});
formatter.result({
  "duration": 249485700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 208279499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 38
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_login_and_should_displayed(String)"
});
formatter.result({
  "duration": 121085400,
  "status": "passed"
});
formatter.after({
  "duration": 310831699,
  "status": "passed"
});
});