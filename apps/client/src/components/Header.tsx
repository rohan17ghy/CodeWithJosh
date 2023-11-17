import { Header, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Image, Button } from '@mantine/core'
import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';


// const useStyles = createStyles((theme) => ({
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: '100%',
//   },

//   links: {
//     [theme.fn.smallerThan('xs')]: {
//       display: 'none'
//     },
//   },

//   burger: {
//     [theme.fn.largerThan('xs')]: {
//       display: 'none',
//     },
//   },

//   link: {
//     display: 'block',
//     lineHeight: 1,
//     padding: `${rem(8)} ${rem(12)}`,
//     borderRadius: theme.radius.sm,
//     textDecoration: 'none',
//     color: "rgb(211 216 232)",
//     fontSize: '0.875rem',
//     fontWeight: 500,    

//     '&:hover': {
//       color: theme.colorScheme === 'dark' ? "white" : theme.colors.gray[0],
//     },
//   },

           
// }));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
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
                <Image height={30} width={30} src={logo} />
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