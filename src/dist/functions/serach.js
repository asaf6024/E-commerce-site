export default function searchByText(query, dataStatic) {


    let find = dataStatic.filter(a => {
        try {
            return a.name.toLowerCase().includes(query.toLowerCase())
                || a.description.toLowerCase().includes(query.toLowerCase())
                || a.price.toLowerCase().includes(query.toLowerCase())

        } catch (error) {
        }

    })

    return find
}