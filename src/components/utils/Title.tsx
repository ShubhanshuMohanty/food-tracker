import { Helmet } from 'react-helmet-async'

interface TitleProps {
    title: string; 
    description: string 
}
function Title({ title, description }: TitleProps ) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description? description: "This is the Home Page of My App"} />
      </Helmet>
    </>
  )
}

export default Title