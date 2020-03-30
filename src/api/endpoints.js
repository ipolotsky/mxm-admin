export async function apiCurrentQuestion()  {
    /*
        try {
            const question = await fetch("https://tinder.pirotech.space/storm/question/", {
                headers: {
                    "X-User": "SPARKY"
                },
            });

            if (question.status === 200) {
                let response = await question.json();
                console.log("Current question " + JSON.stringify(response.result));
                alert(JSON.stringify(response.result));
                return response;
            }
            throw Error(`Failed ${question}, ${await question.json()}`);
        } catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
         */

    let dummyNoQuestion = {"status": "ok", "result": null};
    let dummyQuestion = {"status": "ok", "result": {"id": 1, "text": "What is correct answer?", "image": null, "choices": ["correct", "incorrect"]}}

    return dummyQuestion.result;
}

export async function apiGetQuestions()  {
    /*
        try {
            const question = await fetch("https://tinder.pirotech.space/storm/question/control", {
                headers: {
                    "X-User": "SPARKY"
                },
            });

            if (question.status === 200) {
                let response = await question.json();
                console.log("Current question " + JSON.stringify(response.result));
                alert(JSON.stringify(response.result));
                return response;
            }
            throw Error(`Failed ${question}, ${await question.json()}`);
        } catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
         */

    let dummyNoQuestions = {"status": "ok", "result": []}
    let dummyQuestions = {"status": "ok", "result": [{"id": 1, "state": "open", "text": "What is correct answer?", "image": null, "choices": ["correct", "incorrect"], "correct_answer": "correct", "answers": []}, {"id": 2, "state": "closed", "text": "Another question", "image": null, "choices": ["aaaaaa", "bbbbbb", "ccccccc", "dddddddd"], "correct_answer": "aaaaaa", "answers": []}, {"id": 3, "state": "closed", "text": "Third onw", "image": null, "choices": ["qwer", "qwerty", "asdf", "asdfgh"], "correct_answer": "qwerty", "answers": []}]}
    return dummyQuestions.result
}

export async function apiSetQuestionState(questionId, state) {

/*    try {
        // @ts-ignore
        const result = await fetch("https://tinder.pirotech.space/storm/question/set_state", {
            headers: {
                "X-User": "SPARKY",
            },
            method: "POST",
            body: JSON.stringify({
                state: state,
                question_id: questionId
            }),
        });

        if (result.status !== 200) {
            throw Error(`Failed to set state ${JSON.stringify(result)}, ${JSON.stringify(await result.json())}`);
        }
        return true;
    } catch (e) {
        console.log(JSON.stringify(e));
        throw e;
    }

 */
    console.log("State changed. Question: " + questionId + " State: " + state);
    return true;
}