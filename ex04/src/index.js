var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr){

    var newMonitorsList = [...arr];
       var monitorsList = [];
    for (var i = 0; i < newMonitorsList.length; i++){
        monitorsList.push(newMonitorsList[i]);
        monitorsList.push(i+1);
    }
    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;