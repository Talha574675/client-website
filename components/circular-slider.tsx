const array:any = []
for(let i =0 ;i<=360;i++){
    array.push(i.toString())
}
import CircularSlider from '@fseehawer/react-circular-slider'
const App = () => {
    return (
        <CircularSlider
            width={150}
            label=""
            labelColor="black"
            knobColor="black"
            progressColorFrom="white"
            progressColorTo="white"
            progressSize={5}
            trackColor="white"
            trackSize={5}
            
            knobSize={30}
            data={array} //...
            dataIndex={10}
            onChange={ (value:any) => { console.log(value); } }
        />
    )
};
export default App