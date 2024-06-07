// Menu.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Bootstrap React
import { Nav, Navbar, Offcanvas } from "react-bootstrap";

const Menu = () => {
    const menuPages = [
        {
            href: "/",
            name: "Inicio",
            submenu: [
                {
                    section: "section-resumen",
                    href: "/#",
                    name: "Resumen",
                },
                {
                    section: "/section-intro",
                    href: "/#",
                    name: "Introducción",
                },
                {
                    section: "section-objectives",
                    href: "/#",
                    name: "Objetivos",
                },
                {
                    section: "section-methords",
                    href: "/#",
                    name: "Materiales y métodos",
                },
                {
                    section: "section-results",
                    href: "/#",
                    name: "Resultados",
                },
                {
                    section: "section-conclusions",
                    href: "/#",
                    name: "Conclusiones",
                },
            ],
        },
        {
            href: "/bibliografia",
            name: "Bibliografía",
            submenu: false,
        },
    ];

    return (
        <>
            <Navbar expand="false" fixed="bottom" bg="transparent" variant="light">
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
                <Navbar.Offcanvas placement="end" id="offcanvasNavbar-expand" aria-labelledby="offcanvasNavbar-expand">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand" className="fw-600 text-uppercase">
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav as="ul">
                            {menuPages &&
                                menuPages.map( ( menu, index ) => (
                                    <Nav.Item as="li" key={index}>
                                        <Nav.Link href={menu.href} title={"Ir a: " + menu.name}>{menu.name}</Nav.Link>
                                        {menu.submenu && (
                                            <Nav as="ul">
                                                {menu.submenu.map((submenu, subindex ) => (
                                                    <Nav.Item as="li" key={subindex}>
                                                        <Nav.Link href={submenu.href + submenu.section} title={"Ir a: " + submenu.name}>{submenu.name}</Nav.Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        )}
                                    </Nav.Item>
                                ))}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </>
    );
};

export default Menu;
