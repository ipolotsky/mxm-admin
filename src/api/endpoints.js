export async function apiCurrentQuestion()  {

        try {
            const question = await fetch("https://tinder.pirotech.space/storm/question/", {
                headers: {
                    "X-User": "SPARKY",
                    "Content-Type": "application/json"
                },
            });

            if (question.status === 200) {
                let response = await question.json();
                return response.result;
            }
            throw Error(`Failed ${question}, ${await question.json()}`);
        } catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
}

export async function apiGetQuestions()  {

        try {
            const question = await fetch("https://tinder.pirotech.space/storm/question/control", {
                headers: {
                    "X-User": "SPARKY",
                    "Content-Type": "application/json"
                },
            });

            if (question.status === 200) {
                let response = await question.json();
                console.log("Current question " + JSON.stringify(response.result));
                return response.result;
            }
            throw Error(`Failed ${question}, ${await question.json()}`);
        } catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }

}

export async function apiSetQuestionState(questionId, state) {
    try {
        // @ts-ignore
        const result = await fetch("https://tinder.pirotech.space/storm/question/set_state", {
            headers: {
                "X-User": "SPARKY",
                "Content-Type": "application/json"
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
        console.log("State changed. Question: " + questionId + " State: " + state);
        return true;
    } catch (e) {
        console.log(JSON.stringify(e));
        throw e;
    }
}