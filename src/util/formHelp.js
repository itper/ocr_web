/**
 * Created by chendi on 16/9/26.
 */
export const connectValue = function(field,instance){
    return ({
        value:instance.state[field],
        onChange:(e)=>{
            instance.setState({...instance.state,[field]:e.target.value})
        }
    });
}