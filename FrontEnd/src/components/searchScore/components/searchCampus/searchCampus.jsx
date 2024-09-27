import SearchLayout from "../searchLayout/searchLayout";

export default function SearchCampus(){
    const options = ['São Cristovão', 
        'Nossa Sra. da Glória','Aracaju',
        'Itabaina', 'Lagarto','Laranjeiras','Simão Dias'];
    return(
        <>
        <SearchLayout
        title={'Escolha o campus'}
        options={options}
        link={'/campus'}
        />
        </>
    )
}