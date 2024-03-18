// types ==================================================== //
type getValuesFromMap = <K extends any, V extends any>(map: Map<K, V>) => V[]

// main ===================================================== //
const getValuesFromMap: getValuesFromMap = (map) => {
    
    let result = [];
    for (let value of map.values()) {
        result.push(value);
    }

    return result;
    
}

// exports ================================================= //
export default getValuesFromMap;