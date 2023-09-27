export const TechList = ({title, image}) => {

    return (
        <>
        <img src={image} alt= {title} />
        <h3 className="title3">{title}</h3>
        
        </>
    )
}