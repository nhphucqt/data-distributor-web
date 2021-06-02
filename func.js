function Download(FromTextArea, FileDownloadName) {
    let link = document.createElement("a");
    link.download = FileDownloadName;
    let blob = new Blob([document.getElementById(FromTextArea).value], {type:"text/plain"});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}

function Upload(ToTextArea) {
    var up = document.createElement("input");
    up.type = "file";
    up.addEventListener("change", function() {
        let f = new FileReader();
        f.onload = function() {
            document.getElementById(ToTextArea).value = f.result;
        }
        f.readAsText(this.files[0]);
    })
    up.click();
}

function ClearResult() {
    document.getElementById("txarea2").value = "";
}

function ChangeStateOfText3() {
    let c = document.getElementById("cbox").checked;
    if (c) {
        document.getElementById("txarea3").readOnly = true;
    }
    else {
        document.getElementById("txarea3").readOnly = false;
    }
}

function ResetText3() {
    document.getElementById("txarea3").value = Default_ListRange_string;
}

function SubmitText3() {
    let str = document.getElementById("txarea3").value;
    ListRange = JSON.parse(str);
}