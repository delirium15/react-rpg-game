import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArchiveBoxArrowDownIcon,
  PlayIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const navigation = [
  { name: "Игра", href: "/" },
  { name: "Редактировать героя", href: "/edit-character" },
  { name: "Сохранить/загрузить героя", href: "/save-load-character" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = function (props) {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <span className="text-2xl text-gray-400">{props.heroName}</span>

                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={location.pathname ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Главное меню игры</span>
                      <Bars3Icon className="w-8 text-red p-1" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="game-menu absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "flex px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <PlayIcon className="block h-6 w-6 mr-2" aria-hidden="true" />
                            Играть
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/edit-character"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "flex px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <Cog6ToothIcon className="block h-6 w-6 mr-2" aria-hidden="true" />
                            Редактировать героя
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/save-load-character"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "flex px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <ArchiveBoxArrowDownIcon
                              className="block h-6 w-6 mr-2"
                              aria-hidden="true"
                            />
                            Сохранить/загрузить героя
                          </NavLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

const mapStateToProps = (state) => ({
  heroName: state.hero.name,
});

export default connect(mapStateToProps)(NavBar);
