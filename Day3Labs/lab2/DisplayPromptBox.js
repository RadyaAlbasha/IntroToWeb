var listStyle;

do{
    listStyle = prompt("Select a list style:" + '\n' +"1 (Bullet) , 2 (Numbered) , 3 (lettered)>", "1");
    switch (listStyle)
    {
        case "1":
            document.write("<h1>Bullet</h1> <ul> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul> <p>Click Refresh (or Reload) to run the script again</p>")
            break;
        case "2":
            document.write("<h1>Ordered List: Numbered</h1> <ol> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ol> <p>Click Refresh (or Reload) to run the script again</p>")
            break;
        case "3":
            document.write("<h1>Ordered List: Lettered</h1> <ol Type='A'> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ol> <p>Click Refresh (or Reload) to run the script again</p>")
            break;
        default :
            alert("Wrong Input !!  " + '\n' + "Select a list style!")
    }
}while(listStyle>3);
