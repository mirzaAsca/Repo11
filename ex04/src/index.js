var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorsList = [];
    for (var i = 1; i < newMonitorsList.length + 1; i++) {
        monitorsList.push([newMonitorsList[i - 1], i]);
    }
    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;