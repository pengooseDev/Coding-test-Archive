function solution(id_list = [], report, k) {
    const userList = id_list.map((i) => new User(i));
    for (const i of report) {
        reportParser(i, userList);
    }
    
    for (const i of userList) {
        if (i.reportUser.length >= k) {
            for (const j of i.reportUser) {
                j.mail += 1;
            }
        }
    }

    const returnValue = userList.map((i) => i.mail);
    var answer = [...returnValue];
    return answer;
}

/* Class */
class User {
    constructor(name) {
        this.name = name;
        this.reportUser = [];
        this.mail = 0;
    }

    beReported(reporter) {
        if (this.reportUser.find((i) => i === reporter)) return;
        this.reportUser.push(reporter);
    }
}

/* Handler */
const reportParser = (report, userList = [new User()]) => {
    const splitArray = report.split(" ");
    const reporter = userList.find((i) => i.name === splitArray[0]);
    const reported = userList.find((i) => i.name === splitArray[1]);
    reported.beReported(reporter);
};