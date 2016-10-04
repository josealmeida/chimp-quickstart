# Prerequisites

* Install [Oracle JDK v1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* Install [Node.js LTS](https://nodejs.org/en/download/)
* Install chimp - in the command line run:

```
npm install -g chimp
```

# Sample project clone
```
git clone https://github.com/josealmeida/chimp-quickstart.git
```

# Sample project execution
```
cd chimp-quickstart
chimp
```

# Chimp project setup - brief tutorial

## Folder setup
Create a folder called 'features' where you will place .feature files

Create a folder within 'features' called 'support' where you will place .js step files

## Chimp execution

```
cd test-project-folder
chimp --watch
```

## Feature file creation
Create a Feature file with the extension .feature. This file will describe a single 
feature of the system and is written in the [Gherkin language](https://cucumber.io/docs/reference).

A Feature file will contain one or more Scenarios that will illustrate a business rule and will 
describe an initial context, events and expected outcomes. These are specified in Steps that will 
start with `Given`, `When` or `Then` (if you need multiple `Given` or `When` steps you can use `And` and `But`).

You can use the `@watch` tag in the line before the Scenario description to run only the tagged scenarios 
(when running `chimp --watch`).

You can use quotes in your Gherkin step description to pass what's between the quotes into the 
parameters of the step definition function as shown below:

```
When I click "Back pain, low"
```

## Support file creation

If chimp is running in the current folder, every time you add steps to your feature file 
it will suggest, in the console output, a file name and scaffolding for your .js
step definition files as shown below:

```
You can implement step definitions for undefined steps with these snippets:

// Recommended filename: Given_I_have_visited_the_NICE_website.js
module.exports = function() {
  this.Given(/^I have visited the NICE website$/, function () {
    // Write the automation code here
    pending();
  });
};
```

You can then replace the pending(); function call with your own code.
The step definition files may use the [WebdriverIO API](http://webdriver.io/api.html)
and also [Jasmine Expectations](https://chimp.readme.io/v1.0/docs/jasmine-expect)
to manipulate browser behaviour and make assertion statements respectively.


## Output
You will see the test output in the console with the scenarios and steps that were executed as well 
as a summary of the test execution with failed, skipped and passed scenarios and steps as well 
as the execution time.

```
2 scenarios (2 passed)
8 steps (8 passed)
0m08.241s

2 scenarios (2 failed)
8 steps (2 failed, 6 skipped)
0m05.149s
```

You can output the results to a .json file by passing the following parameter to chimp
```
chimp --jsonOutput=cucumber_output.json
```

# Documentation and tutorials

* [Chimp docs](https://chimp.readme.io/docs)
* [Cucumber Gherkin](https://cucumber.io/docs/reference#gherkin)
* [Cucumber Chimp tutorial](https://chimp.readme.io/docs/tutorial)
* [Webdriver Guide](http://webdriver.io/guide/usage/selectors.html)
* [Webdriver API](http://webdriver.io/api.html)
* [Chimp Jasmine Expect](https://chimp.readme.io/v1.0/docs/jasmine-expect)
* [Jasmine Expectations](http://jasmine.github.io/2.3/introduction.html#section-Expectations)
