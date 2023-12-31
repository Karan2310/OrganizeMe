import { useState, useEffect } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Avatar,
  rem,
  ActionIcon,
} from "@mantine/core";
import {
  IconCircleCheckFilled,
  IconChecklist,
  IconLogout,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { NavLink, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const tabs = [
  { icon: IconChecklist, label: "My Tasks", path: "/" },
  { icon: IconCircleCheckFilled, label: "Tasks Completed", path: "/completed" },
];

export function Navigation({ theme, SetTheme, user }) {
  const [active, setActive] = useState(0);
  const location = useLocation();

  const [cookies, removeCookie] = useCookies(["token", "userId"]);

  useEffect(() => {
    const activeTab = tabs.findIndex((tab) => tab.path === location.pathname);
    setActive(activeTab !== -1 ? activeTab : 0);
  }, [location]);

  const links = tabs.map((link, index) => (
    <NavLink to={link.path} key={index}>
      <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        onClick={() => setActive(index)}
      />
    </NavLink>
  ));

  return (
    <Navbar height={"100%"} width={{ base: 80 }} p="md">
      <Center>
        <Tooltip
          label={user && user.email}
          color="blue"
          position="bottom"
          withArrow
        >
          <Avatar color="blue" radius="xl" size={"2.5rem"}>
            {user && user.name ? user.name.toUpperCase().charAt(0) : ""}
          </Avatar>
        </Tooltip>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink
            icon={theme === "light" ? IconMoon : IconSun}
            label={`${theme == "dark" ? "Light" : "Dark"} mode`}
            onClick={SetTheme}
          />
          <NavbarLink
            icon={IconLogout}
            label="Logout"
            onClick={() => {
              removeCookie("token");
              removeCookie("userId");
              window.location.href = "/login";
            }}
          />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
