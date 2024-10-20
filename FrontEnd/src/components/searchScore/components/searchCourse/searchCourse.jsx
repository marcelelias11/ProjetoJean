import SearchLayout from "../searchLayout/searchLayout";

export default function SearchCourse(){
    const options = ['Filosofia', 
        'Geografia', 'Engenharia', 
        'Ciência da Computação', 
        'Arquitetura', 'Física', 
        'Literatura', 'Astronomia', 
        'Medicina'];
    return(
        <>
        <SearchLayout
        title={'Escolha o curso'}
        options={options}
        link={'/signup'}
        />
        </>
    )
}