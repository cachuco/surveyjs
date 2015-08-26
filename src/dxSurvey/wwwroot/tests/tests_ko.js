/// <reference path="../../sources/base.ts" />
/// <reference path="../../sources/survey.ts" />
/// <reference path="../../sources/question.ts" />
/// <reference path="../../sources/page.ts" />
/// <reference path="../../sources/question_baseselect.ts" />
/// <reference path="../../sources/question_checkbox.ts" />
var dxSurvey;
(function (dxSurvey) {
    var koTests;
    (function (koTests) {
        QUnit.module("koTests");
        QUnit.test("Super stable test", function (assert) {
            assert.equal(1 + 1, 2, "This should usually pass");
        });
        QUnit.test("Set value through observable value", function (assert) {
            var question = new dxSurvey.Question("q");
            question.koValue("test");
            assert.equal(question.value, "test", "value is set correctly.");
        });
        QUnit.test("koOtherVisible for one choice items", function (assert) {
            var question = new dxSurvey.QuestionSelectBase("q");
            assert.equal(question.koOtherVisible(), false, "Initially is not visible");
            question.koValue(question.otherString);
            assert.equal(question.koOtherVisible(), true, "Other visible is true after selecting it");
        });
        QUnit.test("Create koValue as observable array for checkbox", function (assert) {
            var question = new dxSurvey.QuestionCheckbox("q");
            question.koValue.push("test1");
            question.koValue.push("test2");
            assert.deepEqual(question.koValue(), ["test1", "test2"], "koValue is observable array");
            assert.deepEqual(question.value, ["test1", "test2"], "value is set correctly.");
        });
        QUnit.test("koOtherVisible for multi choice items", function (assert) {
            var question = new dxSurvey.QuestionCheckbox("q");
            assert.equal(question.koOtherVisible(), false, "Initially is not visible");
            question.koValue.push("test1");
            question.koValue.push(question.otherString);
            assert.equal(question.koOtherVisible(), true, "Other visible is true after selecting it");
            question.koValue.pop();
            assert.equal(question.koOtherVisible(), false, "Other visible is true after selecting it");
        });
        QUnit.test("Update koValue on changing data in Survey or Question.value ", function (assert) {
            var survey = new dxSurvey.Survey();
            survey.setValue("textQuestion", "initialValue");
            var page = survey.addNewPage("my page");
            var question = page.addNewQuestion("text", "textQuestion");
            assert.equal(question.koValue(), "initialValue", "get initial value");
            question.value = "setFromValue";
            assert.equal(question.koValue(), "setFromValue", "set from question value");
            survey.setValue("textQuestion", "setFromSurvey");
            assert.equal(question.koValue(), "setFromSurvey", "set from survey");
        });
        QUnit.test("Update koValue on changing data in Survey or Question.value for Multiple Answer Question ", function (assert) {
            var survey = new dxSurvey.Survey();
            survey.setValue("checkboxQuestion", "initialValue");
            var page = survey.addNewPage("my page");
            var question = page.addNewQuestion("checkbox", "checkboxQuestion");
            assert.deepEqual(question.koValue(), ["initialValue"], "get initial value");
            question.value = "setFromValue";
            assert.deepEqual(question.koValue(), ["setFromValue"], "set from question value");
            survey.setValue("checkboxQuestion", "setFromSurvey");
            assert.deepEqual(question.koValue(), ["setFromSurvey"], "set from survey");
        });
    })(koTests = dxSurvey.koTests || (dxSurvey.koTests = {}));
})(dxSurvey || (dxSurvey = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR4c3VydmV5X2tvdGVzdHMudHMiXSwibmFtZXMiOlsiZHhTdXJ2ZXkiLCJkeFN1cnZleS5rb1Rlc3RzIl0sIm1hcHBpbmdzIjoiQUFBQSxBQU1BLDhDQU44QztBQUM5QyxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELDhDQUE4QztBQUM5Qyw2REFBNkQ7QUFDN0QsMkRBQTJEO0FBQzNELElBQU8sUUFBUSxDQXVEZDtBQXZERCxXQUFPLFFBQVE7SUFBQ0EsSUFBQUEsT0FBT0EsQ0F1RHRCQTtJQXZEZUEsV0FBQUEsT0FBT0EsRUFBQ0EsQ0FBQ0E7UUFDckJDLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBRXhCQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLFVBQVVBLE1BQU1BO1lBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUNBLENBQUNBO1FBQ0hBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLG9DQUFvQ0EsRUFBRUEsVUFBVUEsTUFBTUE7WUFDN0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFDSEEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EscUNBQXFDQSxFQUFFQSxVQUFVQSxNQUFNQTtZQUM5RCxJQUFJLFFBQVEsR0FBRyxJQUFJLDJCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQzNFLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSwwQ0FBMEMsQ0FBQyxDQUFDO1FBQzlGLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFDSEEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaURBQWlEQSxFQUFFQSxVQUFVQSxNQUFNQTtZQUMxRSxJQUFJLFFBQVEsR0FBRyxJQUFJLHlCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLDZCQUE2QixDQUFDLENBQUM7WUFDeEYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSx1Q0FBdUNBLEVBQUVBLFVBQVVBLE1BQU1BO1lBQ2hFLElBQUksUUFBUSxHQUFHLElBQUkseUJBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUM7WUFDM0UsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSwwQ0FBMEMsQ0FBQyxDQUFDO1lBQzFGLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLDBDQUEwQyxDQUFDLENBQUM7UUFDL0YsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSw4REFBOERBLEVBQUVBLFVBQVVBLE1BQU1BO1lBQ3ZGLElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDaEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMzRCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUN0RSxRQUFRLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztZQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUseUJBQXlCLENBQUMsQ0FBQztZQUM1RSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUNBLENBQUNBO1FBQ0hBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLDJGQUEyRkEsRUFBRUEsVUFBVUEsTUFBTUE7WUFDcEgsSUFBSSxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3BELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDNUUsUUFBUSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDaEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1lBQ2xGLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0EsRUF2RGVELE9BQU9BLEdBQVBBLGdCQUFPQSxLQUFQQSxnQkFBT0EsUUF1RHRCQTtBQUFEQSxDQUFDQSxFQXZETSxRQUFRLEtBQVIsUUFBUSxRQXVEZCIsImZpbGUiOiJ0ZXN0c19rby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9zb3VyY2VzL2Jhc2UudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vc291cmNlcy9zdXJ2ZXkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vc291cmNlcy9xdWVzdGlvbi50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9zb3VyY2VzL3BhZ2UudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vc291cmNlcy9xdWVzdGlvbl9iYXNlc2VsZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3NvdXJjZXMvcXVlc3Rpb25fY2hlY2tib3gudHNcIiAvPlxyXG5tb2R1bGUgZHhTdXJ2ZXkua29UZXN0cyB7XHJcbiAgICBRVW5pdC5tb2R1bGUoXCJrb1Rlc3RzXCIpO1xyXG5cclxuICAgIFFVbml0LnRlc3QoXCJTdXBlciBzdGFibGUgdGVzdFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICAgICAgYXNzZXJ0LmVxdWFsKDEgKyAxLCAyLCBcIlRoaXMgc2hvdWxkIHVzdWFsbHkgcGFzc1wiKTtcclxuICAgIH0pO1xyXG4gICAgUVVuaXQudGVzdChcIlNldCB2YWx1ZSB0aHJvdWdoIG9ic2VydmFibGUgdmFsdWVcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IG5ldyBRdWVzdGlvbihcInFcIik7XHJcbiAgICAgICAgcXVlc3Rpb24ua29WYWx1ZShcInRlc3RcIik7XHJcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHF1ZXN0aW9uLnZhbHVlLCBcInRlc3RcIiwgXCJ2YWx1ZSBpcyBzZXQgY29ycmVjdGx5LlwiKTtcclxuICAgIH0pO1xyXG4gICAgUVVuaXQudGVzdChcImtvT3RoZXJWaXNpYmxlIGZvciBvbmUgY2hvaWNlIGl0ZW1zXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgICAgICB2YXIgcXVlc3Rpb24gPSBuZXcgUXVlc3Rpb25TZWxlY3RCYXNlKFwicVwiKTtcclxuICAgICAgICBhc3NlcnQuZXF1YWwocXVlc3Rpb24ua29PdGhlclZpc2libGUoKSwgZmFsc2UsIFwiSW5pdGlhbGx5IGlzIG5vdCB2aXNpYmxlXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uLmtvVmFsdWUocXVlc3Rpb24ub3RoZXJTdHJpbmcpO1xyXG4gICAgICAgIGFzc2VydC5lcXVhbChxdWVzdGlvbi5rb090aGVyVmlzaWJsZSgpLCB0cnVlLCBcIk90aGVyIHZpc2libGUgaXMgdHJ1ZSBhZnRlciBzZWxlY3RpbmcgaXRcIik7XHJcbiAgICB9KTtcclxuICAgIFFVbml0LnRlc3QoXCJDcmVhdGUga29WYWx1ZSBhcyBvYnNlcnZhYmxlIGFycmF5IGZvciBjaGVja2JveFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gbmV3IFF1ZXN0aW9uQ2hlY2tib3goXCJxXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uLmtvVmFsdWUucHVzaChcInRlc3QxXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uLmtvVmFsdWUucHVzaChcInRlc3QyXCIpO1xyXG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwocXVlc3Rpb24ua29WYWx1ZSgpLCBbXCJ0ZXN0MVwiLCBcInRlc3QyXCJdLCBcImtvVmFsdWUgaXMgb2JzZXJ2YWJsZSBhcnJheVwiKTtcclxuICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKHF1ZXN0aW9uLnZhbHVlLCBbXCJ0ZXN0MVwiLCBcInRlc3QyXCJdLCBcInZhbHVlIGlzIHNldCBjb3JyZWN0bHkuXCIpO1xyXG4gICAgfSk7XHJcbiAgICBRVW5pdC50ZXN0KFwia29PdGhlclZpc2libGUgZm9yIG11bHRpIGNob2ljZSBpdGVtc1wiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gbmV3IFF1ZXN0aW9uQ2hlY2tib3goXCJxXCIpO1xyXG4gICAgICAgIGFzc2VydC5lcXVhbChxdWVzdGlvbi5rb090aGVyVmlzaWJsZSgpLCBmYWxzZSwgXCJJbml0aWFsbHkgaXMgbm90IHZpc2libGVcIik7XHJcbiAgICAgICAgcXVlc3Rpb24ua29WYWx1ZS5wdXNoKFwidGVzdDFcIik7XHJcbiAgICAgICAgcXVlc3Rpb24ua29WYWx1ZS5wdXNoKHF1ZXN0aW9uLm90aGVyU3RyaW5nKTtcclxuICAgICAgICBhc3NlcnQuZXF1YWwocXVlc3Rpb24ua29PdGhlclZpc2libGUoKSwgdHJ1ZSwgXCJPdGhlciB2aXNpYmxlIGlzIHRydWUgYWZ0ZXIgc2VsZWN0aW5nIGl0XCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uLmtvVmFsdWUucG9wKCk7XHJcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHF1ZXN0aW9uLmtvT3RoZXJWaXNpYmxlKCksIGZhbHNlLCBcIk90aGVyIHZpc2libGUgaXMgdHJ1ZSBhZnRlciBzZWxlY3RpbmcgaXRcIik7XHJcbiAgICB9KTtcclxuICAgIFFVbml0LnRlc3QoXCJVcGRhdGUga29WYWx1ZSBvbiBjaGFuZ2luZyBkYXRhIGluIFN1cnZleSBvciBRdWVzdGlvbi52YWx1ZSBcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgICAgIHZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5KCk7XHJcbiAgICAgICAgc3VydmV5LnNldFZhbHVlKFwidGV4dFF1ZXN0aW9uXCIsIFwiaW5pdGlhbFZhbHVlXCIpO1xyXG4gICAgICAgIHZhciBwYWdlID0gc3VydmV5LmFkZE5ld1BhZ2UoXCJteSBwYWdlXCIpO1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHBhZ2UuYWRkTmV3UXVlc3Rpb24oXCJ0ZXh0XCIsIFwidGV4dFF1ZXN0aW9uXCIpO1xyXG4gICAgICAgIGFzc2VydC5lcXVhbChxdWVzdGlvbi5rb1ZhbHVlKCksIFwiaW5pdGlhbFZhbHVlXCIsIFwiZ2V0IGluaXRpYWwgdmFsdWVcIik7XHJcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSBcInNldEZyb21WYWx1ZVwiO1xyXG4gICAgICAgIGFzc2VydC5lcXVhbChxdWVzdGlvbi5rb1ZhbHVlKCksIFwic2V0RnJvbVZhbHVlXCIsIFwic2V0IGZyb20gcXVlc3Rpb24gdmFsdWVcIik7XHJcbiAgICAgICAgc3VydmV5LnNldFZhbHVlKFwidGV4dFF1ZXN0aW9uXCIsIFwic2V0RnJvbVN1cnZleVwiKTtcclxuICAgICAgICBhc3NlcnQuZXF1YWwocXVlc3Rpb24ua29WYWx1ZSgpLCBcInNldEZyb21TdXJ2ZXlcIiwgXCJzZXQgZnJvbSBzdXJ2ZXlcIik7XHJcbiAgICB9KTtcclxuICAgIFFVbml0LnRlc3QoXCJVcGRhdGUga29WYWx1ZSBvbiBjaGFuZ2luZyBkYXRhIGluIFN1cnZleSBvciBRdWVzdGlvbi52YWx1ZSBmb3IgTXVsdGlwbGUgQW5zd2VyIFF1ZXN0aW9uIFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkoKTtcclxuICAgICAgICBzdXJ2ZXkuc2V0VmFsdWUoXCJjaGVja2JveFF1ZXN0aW9uXCIsIFwiaW5pdGlhbFZhbHVlXCIpO1xyXG4gICAgICAgIHZhciBwYWdlID0gc3VydmV5LmFkZE5ld1BhZ2UoXCJteSBwYWdlXCIpO1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHBhZ2UuYWRkTmV3UXVlc3Rpb24oXCJjaGVja2JveFwiLCBcImNoZWNrYm94UXVlc3Rpb25cIik7XHJcbiAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbChxdWVzdGlvbi5rb1ZhbHVlKCksIFtcImluaXRpYWxWYWx1ZVwiXSwgXCJnZXQgaW5pdGlhbCB2YWx1ZVwiKTtcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IFwic2V0RnJvbVZhbHVlXCI7XHJcbiAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbChxdWVzdGlvbi5rb1ZhbHVlKCksIFtcInNldEZyb21WYWx1ZVwiXSwgXCJzZXQgZnJvbSBxdWVzdGlvbiB2YWx1ZVwiKTtcclxuICAgICAgICBzdXJ2ZXkuc2V0VmFsdWUoXCJjaGVja2JveFF1ZXN0aW9uXCIsIFwic2V0RnJvbVN1cnZleVwiKTtcclxuICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKHF1ZXN0aW9uLmtvVmFsdWUoKSwgW1wic2V0RnJvbVN1cnZleVwiXSwgXCJzZXQgZnJvbSBzdXJ2ZXlcIik7XHJcbiAgICB9KTtcclxufSJdLCJzb3VyY2VSb290Ijoic291cmNlcyJ9