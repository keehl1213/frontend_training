const reduce_test1 = (arr) => arr.reduce(function (result, plan) {

    const { project, form, part, tooling } = plan;

    let p = result[project];
    if (!p) {
        result = {
            ...result,
            [project]: {
                [form]: {

                    [part]: [tooling]

                }
            },
        };
        return result;
    }

    let form1 = p[form];
    if (!form1) {
        result[project][form] = {
            [part]: [tooling],
        }
        return result;
    }

    let part1 = form1[part];
    if (!part1) {
        result[project][form][part] = [tooling];

    } else {
        result[project][form][part].push(tooling);
        result[project][form][part].sort();
    }

    return result;

}, {});


export default {
    reduce_test1
}

