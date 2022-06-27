function ImmuteFeb9() {
    let items = [1, 2, 3, 4, 5];
    // This is bad, push modifies the original array
    items.push(6);
    console.log(items);
    // This is good, concat doesn’t modify the original array
    const newItems = items.concat([6]);
    console.log(items);
    var str = 'abc';
    // str[2] = 'd';
    // str = 'abd';
    // str = "abc"
    console.log(str);
    str = str.replace("b", "k");
    str = str.toUpperCase();
    console.log(str);
    let text = "       Hello World!        ";
    let result = text.trim();
    console.log(result);

    // Doubt
    // const st = "abc";
    // st.myNewProperty = "some value";
    // alert(st.myNewProperty);

    const modifyShirt = (shirt, newColor, newSize) => {
        return {
        id: shirt.id,
        desc: shirt.desc,
        color: newColor,
        size: newSize
        };
       }
    let shirtOb = modifyShirt("Rayon","white","28");
    console.log(shirtOb.color);

    const modifyShirt2 = (shirt, newColor, newSize) => {
        return Object.assign( {}, shirt, {
        color: newColor,
        size: newSize
        });
       }
      let ob = modifyShirt2("Rayon","blue","28");
       console.log(ob.color)
     
       //console.log(modifyShirt2.shirt.color);

    return (
        <div></div>
    )
}
export default ImmuteFeb9;