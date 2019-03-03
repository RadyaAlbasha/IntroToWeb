function searchSubstring()
{
    var allString = document.getElementById("allString").value;
    var substring = document.getElementById("subString").value;
    var atIndex=document.getElementById("atIndex").value;
    document.getElementById("FIndex").value = allString.indexOf(substring);
    document.getElementById("LIndex").value = allString.lastIndexOf(substring);
    document.getElementById("FFromIndex").value = allString.indexOf(substring,atIndex);
    document.getElementById("LFromIndex").value = allString.lastIndexOf(substring,atIndex);
}

