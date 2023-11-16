import MobileMenuIcon from "./mobile";

export interface MobileMenuProps {
    menu: HeaderLink[];
    setOpen: Function;
    isOpen: Boolean
}

interface HeaderLink {
    name: string;
    href: string;
    list: ILink[];
}

interface ILink {
    name: string;
    href?: string;
}

export default function MobileMenu({isOpen, menu, setOpen}: MobileMenuProps){
    return (
        <div className={` absolute top-0 left-0 w-full h-sceen bg-white ${isOpen ? 'bolck' : 'hidden'}`}>
            {/* <div 
                className="cursor-pointer absolute top-5 right-3 w-10 h-10"
                onClick={() => setOpen(!isOpen)}
            >
                <div className={["w-6 h-0.5 bg-black absolute top-1 ", isOpen? "hidden":'block'].join('')}></div>
                <div className={["w-6 h-0.5 bg-black absolute top-3 ", isOpen? "rotate-45":'rotate-0'].join('')}></div>
                <div className={["w-6 h-0.5 bg-black absolute top-3 ", isOpen? "-rotate-45":'rotate-0'].join('')}></div>
                <div className={["w-6 h-0.5 bg-black absolute top-5 ", isOpen? "hidden":'block'].join('')}></div>
            </div> */}
            <ul className="p-10">
                {
                    menu.map((_item, _index) => {
                        return <div className="text-black-600 cursor-pointer relative text-center p-6" key={`link${_index}`}>
                          <a
                            className="pointer-events-none "
                            href={_item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          > 
                            {_item.name}
                          </a>
                        </div>
                      })
                }
            </ul>
        </div>
    )
}