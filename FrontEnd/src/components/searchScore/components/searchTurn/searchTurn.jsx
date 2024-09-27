import SearchLayout from "../searchLayout/searchLayout";

export default function SearchTurn(){
    const options = ['Manhã', 
        'Tarde','Noite'];
    return(
        <>
        <SearchLayout
        title={'Escolha o turno'}
        options={options}
        link={'/nada'}
        />
        </>
    )
}