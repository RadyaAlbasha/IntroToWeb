function splitSentence()
{
    var sentence = document.getElementById("sentence").value;
    var splitBy = document.getElementById("splitBy").value;
    var words = sentence.split(splitBy);
    document.getElementById("words").value = words.join("\n");
}