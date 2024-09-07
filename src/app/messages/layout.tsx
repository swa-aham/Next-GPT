import NavBar from "./NavBar";  

export default function Layout({
    children,
}:{
    children: React.ReactNode
})
{
    return (
        <>
        <NavBar/>
        <main className="m-auto max-w-7x1 p-4">{children}</main>
        </>
    );
    
}
