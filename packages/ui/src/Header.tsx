import { Header, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';


interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export const HeaderSimple = ({ links }: HeaderSimpleProps): JSX.Element =>  {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className= 'text-sm text-gray-300 hover:text-white font-semibold no-underline leading-4 rounded-sm px-4 py-2'
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={60} className='flex justify-between items-center 2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3 border-b-0  bg-transparent'>
        <a href="#">
            <div className='flex'>
                {/* <Image height={30} width={30} src={logo} /> */}
                <div className='font-bold text-white ml-1 text-2xl'>JOSH</div>            
            </div>
        </a>        
        <Group spacing={5} className=' hidden sm:block'>
          {items}
          <Button className=' bg-violet-500 rounded-full hover:bg-violet-600'>Member Area</Button>
        </Group>

        <Burger opened={opened} onClick={toggle} className='block sm:hidden' size="sm" />
    </Header>
  );
}