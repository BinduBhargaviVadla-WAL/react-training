function Counter() {
    let count = 0;
    function increase() {
        count += 1;
    }
    function decrease() {
        count -= 1;
    }
    function showCount() {
        alert(count);
    }
    return (
        <div>
            count = {count}
            <br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={showCount}>Show Count</button>
        </div>

    )

}
export default Counter;