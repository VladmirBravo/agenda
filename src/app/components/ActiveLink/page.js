import  { ReactElement, cloneElement }  from 'react';
import { usePathname } from 'next/navigation'
import Link, {  LinkProps } from 'next/link'


export default function ActiveLink ({ children, activeClassName, ...rest }){
  const pathname = usePathname()
  //Se a rota/pagina que estamos a acessar for igual ao link então ativamos a class
  const className = pathname === rest.href ? activeClassName : '';
    return(
        <Link legacyBehavior {...rest}>
          {cloneElement(children,{className})}
        </Link>
    )
}