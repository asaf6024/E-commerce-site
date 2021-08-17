export default function sortData(value, data) {

    // console.log('in sort fun')

    let copiedData = [...data]

    if (value == 0)
        copiedData.sort((a, b) => a.id - b.id)
    if (value == 1)
        copiedData.sort((a, b) => b.price - a.price)
    else if (value == 2)
        copiedData.sort((a, b) => a.price - b.price)

    return copiedData
}