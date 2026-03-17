import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";

function Profile_and_Setting() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePasswordClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleConfirmPassword = () => {
    if (newPassword === confirmPassword && newPassword) {
      alert("Password changed successfully!");
      handleCloseModal();
    } else if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Please enter a new password!");
    }
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Header Section */}
      <div className=" px-10 py-5 flex justify-between items-center ">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 m-0">
            Profile & Settings
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage your personal information and preferences
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 bg-gray-50 rounded-md px-3 py-2 border border-gray-200">
            <input
              type="text"
              placeholder="Search"
              className="border-none bg-transparent outline-none text-sm w-40"
            />
            <button className="bg-transparent border-none cursor-pointer text-base">
              <IoIosSearch size={20} />
            </button>
          </div>
          <button className="bg-transparent border-none cursor-pointer text-lg">
            <IoMdNotificationsOutline size={26} />
          </button>
          <div className="flex items-center gap-2">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEBAVFQ8QEA8QDxAQEBAPFRAVFRUXFhUVFRUYHSggGBolGxUXITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQGislHyUrLS8vLSstLystLSstLTUtLSstLSstLS0tLS0tLS0tLS0rLS0tLS0tLS0rKzc3Ny0tK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIFAwQGBwj/xAA8EAABAwIDBgMGBAQGAwAAAAABAAIRAyEEEjEFBkFRYXEigZETMqGxwfBCYtHhFCNScgdDgpLC8TNTov/EABkBAQEBAQEBAAAAAAAAAAAAAAABBAIDBf/EACARAQEBAAIDAQADAQAAAAAAAAABAgMREiExQRMiUQT/2gAMAwEAAhEDEQA/AKsKUICaoEJpwgjCYCYUgFAoTTRCBIhOEIIwiFJCgSITTAQRhEKULHXrNYMz3BreZsglCUKvp7dwziQKmn5Xx5GEM29hy4tzmRzY8D5J2LGEQlRrMddrgexBjusqCGVEKcJwghCcKcIhUQhOFKEIIwiFKE4QRAThShOEChMIhSAQKEwEwnCBQhShCCtATCQUggFKElJAk0wEICE0QiEAhMIKBQhMpIEo1KrWDM9wa0alxgBN7gBJIAFySYAC4Lbe2jXeQ138prvAPDBi2aeqgstp71OzOZQDYBIFS7pjiOAXPMquqHxOkk/iesjMG50uLh2Dc0/RZ6NN1MyabB/cKTT5SVHTPTosAIfSqTH4c0c9ZH1Wm7F0WxDXZh+INg9nAmD6LX2pj3PMOJMWAe0W7EGFVkp0LWptRwOdlQh2mhaQOUyrbZ299RsCqM7eMwHDsePmuUlKVU7evbP2hSrNz03AjiNC08iOBW21eVbA2m6jVDgbOOV4mxB4leo4SqHtDhxCIywnCYTVEYSIU0EIIIAUoRCBJwmApQgiApgJBSQKE0wnCBAIUkkFUFIJAKQCBhSASCkgE0k4QCaEIBEJwiFAoRCaIQUG+M/w9tPaNngIub8xZeevqQbXPM/QL0Hfei44aW6Ne0uH5dCfiuCwGDdWrMpNMGo9jA46NkxPlqosWuxNiYnET7KkajrAucA5je7j9F0VL/Drab/DDWt1jO5zfQ6feq9b3e2TSoU20qbQGtAHfqTxJXSU4aCs381t9Nn8Ocz39fNuO3Bx1JwFRkNJgOBzD9VvYX/Dys4eICeDgfC4dRqCveK2R2rQVW1WawIC51z6/HWeDN+vHMT/AId1AJBvyPBUu0N0atMTy1XuOIYuY260ZXLjPPrt3r/nx08UxFEsdlcI/TmvVt3gP4enDw/wDxjQrz3eRg9qP7V2e4TT/Cgni9+XoAY+crdL3Hz9Tq9OiCFJCrkoSU0KiEIhSQgAnCEwgUJwnCcIFCaaEAhOEIKoJhAUggITQAmEAmiE4QJNEIQATQhQCEBCBPYCCDoQQZ6rh92sFGJYGRBqNAJ/CSSBK9J2RgxUdBYXAkNMOy5ZDjm66C3VaOxN2nYbHezfDmEVH03R77SSRbmPovHfJPcaOPivU1+V32DlWQewiHOE915rt3FYx73ZX+zose5jADlJvEki5P6rnsfgsc0hxxhBgQwEtP8AtJzH0WbOY1W2vXsQ0C4cIUMrQJJC4DdzFY9zm03j2jIjODoevLsUb4bVxNCKcw48tbcl59Tt69+u3V4/Esbq4eZC4veDEh1muB7GVyVfB4iqTUrVTTB41a1OkT2Y45lr19mvBBp18xAkT14ggwQvbPFHjrlt9NHebDkPD+BFvJd1unSy4SiOdMO/3Eu+q4/brXPZRbHjcSCOsfsVe7sVaralOlUeSHUiGs0a0MAygDtx1WnO5JIyaxbbY6oIUkoXo8ShCcIVCQmmgAEwEBMICEJpwgimmAhAIQhBVwpQkFIIBNAQEDTQhAITQFAIQgoAIQkg6jcyP5h/EMpjyd+63303vrsqPAADa5Zlk2Ps28eNyuf3YxOSuBMCoMh7/h+I+K6PbLzSfRf/AJeZ1In+nP4hPSWx5hYubNm+2/h1LxyNXbW74rCczmkSW5HFlzqcwuDfguQfuJTFX2rMI4vP5mZNImDovT8O8FZ6jwL2XGe5Pr1t+dxz2xNmewptYQA5v5i8joXG5XL78kDFUn2kE63AnQruaZzOMcTY81xP+IDDmADZOi4zPb0rR2vsAVqbR/CteGkva5tRwdLtS4uMn1KojunWYXVAzIB+DPM9hoNF3e6+L9rRafxNljgeBbYqW8FbKw9l1N6+OdYz9eV7TBbleLuY+wPVrm/Uei2N2cT7aux0QWCoDGhlh+qwbXqkvDGQXXqX0tIE+ZB8lbbpYAMLiBZrQO7naknyWjP2M2r1nTpUQnCYWliRShSIRCojCAFJCAAUgkE0DhEICaAhEJpKBJoTQVIUgkEwqBSCSYQNNCEAgIQgAmlCagUJwmiEA0wZGoIIPJW21dv1KuHdRLG5yAQ+/vNIc0xzkBVQTXOsTX13ndz8ddsLaQdRDyb5QXLLV2lTLoqPgC+WePI9ei4/dzF5HupnQOykE9fDaOqyM2XiHvc6i6m7I4uLahe32k8AQDlPHQrBrPWrK+jjXeZ0sd4MRUL2vw9ZzGtkOZla5j+pm414ELzvevb+LNQZh4APA9nja74LvX08blIGEokGczQ5zjpH4otc+qpcfgsa5uVuGoUmgG8UwfL3jHku89T8emuLVnquf3T3jdTeS6crwS68eLhHyXR7Y2uytSD2nwukXsQW6tI4ELm3bAxb3+J1Gmxplzm3cI1I8I+SjtSrTp0MrHkl9RziCLiGhnPjCvjLr08LrWZZWTd/AtxD6z3EjKabGxHUkR/tXV4bDNptytFuPM91S7j04oOf/XVd/wDIDR8l0MLXnM+sOtW+kUKSF04RQmkgE4QhAQmEJhUACkAkE0AknCFAoQmhBUJqIUgqGFIKKkEEghATQCEBCAhCaSBoQmoAJykmEGrjsI5o/iW+7mFOt+WYLXeog+S2939tlhLneIPIi4v1jWOM9VdbAYHNqsIBa4NBB0IMghcXt7Zz8FUzNl2GcY5lutnfr9dcm+tasbOP+uZXf4naNWoycOW5wLhzgCCuaNLaD5L8rRPPMTzi60Nl7cpUwHF3ADh1v2/dZcVvhTIdcDw2M6xp9PRc+Fj3nJOmhvBj/ZtNMGSffOk9IhcSXuqOgGwOVvfn98lm2ptI1XQySTNuU6+SMFRyGD73P5r1znxjNvflXd7qgCiWjRryB6BXKot1H++3o148rH5hXxXri95jw5J1oiolSSXo4RKSkUlAJpJoBNIoVEk0gpBAk0QgKAhJSQgpQpKIUgqGpBRhNBMIUVIIGE0JIGkmiEAmEitjB4KrVMU2F3M6NHdxsEGBbWBwNSs7LTaSeJ0A7ngun2Zu1TaA6r43cvwDy4+fouhoUGsDWtAGsAAD4BQc7s3Z4o5mzLtHOvcixgcADP3YYdqYRrgWuaC0i4ImVYF8VqrD+F8jqHgOn1Lh5KVdgPZfN3q+dtfSxJ4Tp49vVuk6nNXDEupavpSSWcy3mPiuPp0S6176iXL3TGYMiYPFcTtvdp2Y1KbRzcBx6he2eX/Xnrh/Y5XD4cNGgCyUaN54rY9jAg6rLhmLq6czKdVhy2JBGhaS0jzC0sHtjGUqzG+2c+m50FtTx2iTBN+CtHkAKrogPqZwPCzM1p5u4+mnmrxW9ueWTp22F21Sech8LxHvaGeRW+VyOx9mVK5OQRnMBxnQdF2OC3ZrsECuezgCPQrSyscoW9U2TUHInzH6rTqUnN95pH3zQJCEIGhJCokE1GUwgkEIQEDQiEkFME0k0DUgohSQMKSiE0DCaAr3Yu7jqzRVectIkxAlzoMeQQUY5cVZ4PYVepfLkb/U+R6N1K7XBbNpUx/LYBHGBmPdxuVttpTrPog5zB7uUWQXzUd+YQ0eX6q9ZTgAC3IC1uizupwbJZT8OqCTOSyHWOghY6bDqOPCPqsjtf2UGljMCHH2gs8At/uGuU9uHc81oOB0V3V5ixOs/dlp1gHd+uq8OXg8vc+tHFz+E6vxS4unOipca58EALqa1MQf+1V1KDSfeHoT9FlvDufjZnn47Prj627ftQXEw7oufxuzalIkRMcV6m0UwIEk9Bb1UaGFb72QA2u/xEduEr0xxbv15cnNxyenllPdzHVgD7NzKZiJs946DgOp/dW+z90KxIaRlYBEN4D9V6fRpEgWI1km5PGyymiI0tOllrzmZYtbur7VGytlMoNAA6aDgrFrbac/NNzZsNOaz0m6WGl124azm9PQKFTDA6/Jbr230n4x6rERzHG2igpsTslpnKI6i3wVXicA9ugkffBdXU+zZYK9EEEnuqOPTWbaDqjj7RrW+wBjMfefwkdPmsIRTTQEigkCiVFOUDlCjKEFQFIKKkEDUgopoJBMKITQbuzME6tUbSbq43P9I1J8gvU6GHbTY2m0eFrQ0DoAuX3EwGVjq5F6ksYTwaNfU/JdQ4ifKToURjLACggC1+fNEqQGnLoEEKp+SA7iB010SxNh8k6JgDzNgoqQPxRmv9/AIdOvzgJZT5aoIuf+8rWxTCPdMjgILvSdFnnkNEnUwe6ClxVV495p/wBJ18j+qx0WB18xEc2A/wDJXootZc69RoqnEYn2p9lSaI/E+LDmO6DXZTBNiSfyw3tMyrGhhQ2C4DNGtyR53hZcFg20/wDofDmsjyOc9OSCDfj6ofIEnSLT+iZbeT+6KzRYdbojFTbItx1sFkp24W+SlbTgNCbKDxwHJA2k8rk/fZAv5d0i62t9O6KJte3G4QYna5RY8b8FWbZcS5mFZ/mkuqG9qbfe9bDzVjgSXB1QxDnHLwEC0qn2HU9tWxOKPuhww1E8msu+O7i0f6SqDatMQWgCAIi0AclzeHdcsOrTbtwXRvcHEke7PrwXObRaWVA71tqDzQZkISRTQkiUAmkhBUhSUQpBAwpBRTlBIKdKmXENbq4ho7mwWOVdbpUA/EtJ0YHPPlYfEoPQMFQFNjKbdKbWt9IU3H4dYSLgI+Cxv7ddAZRE88/JAd5nSVgruOUkcpAtwvp5Io1RBM2vr8AOiDLjAPCPNZWm1vhZYXHxCxi3ksoPTzRUTz+yi/n8kcZOnyUT5el/VQSp9zreBAQ5wHQceiVMxP6lauIqHTj6ecINbETVdkBOUcdVt4am1gho08pWDDMjgLrYaANQfiglUfz14a2ULiwPr8ljkl3Plf6LIW26acUDfPLW5t8UqjRIBPWVJh7Rr92Q4XGlpugDGs/oFjjmZ+ZTy8/3Scen315oiFXgPieiw7TrltMjQu8I43NgY4rLmObp6QtLEOz1WN4NOY35C10GXaVQUMLUd/66LnW4Q1UGDBpYahg2f+V9MVax/oznM8nrLoVxvU8fwzmujK51Njr8HVGtcD5SqzZbswdiHCX13SOQbJFNo6ReOqo2HsDGwPdaAO/Bc/tmnYnj8FdY3EeP2bb+zgvcdA7UDuqbar9W9Jv2sgwYd8tB6R6LJK1cAfB5rZlFNCAhA0JIQVQUghCBolJCCQXVbjUr1X8QGNHmST8ghCDr3Hr21WGqSBJ8tChCI1atcH4zb1+awYWqXljPwt94f2kj/ihCC2p1eVz9wspcNJ17oQisNzYJFw+iEKBuPl8Vq2c6+gsNDPdCEGxTZ5gLBiHgD9JQhAqIA/dbEH9LoQgMwmNecjio3m5t2QhBEmOHfgoOqemnVJCqNWpXga9L/NY8Fd+adZSQgqd/sbkwxP52Hno4E/JRw+MFOiKhH8rC0qYMavqlogdAEkINXDzlaX61KzM5/qc4iR24dgq/HVc9SvwAiOsW8kIQY8JYd2g/ErPKSEVMFNCEAhCEH//Z"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="m-0 text-xs text-gray-900 font-medium">John Tari</p>
              <p className="m-0 text-xs text-gray-600">johtari@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className=" px-10 py-10 text-center">
        <img
          src="data:image/jpeg;base64,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"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 mx-auto"
        />
      </div>

      {/* Personal Information Section */}
      <div className=" px-10  py-8 mt-5 ">
        <div className="flex  items-center mb-5">
          <h2 className="text-[18px] font-semibold text-gray-900 m-0">
            Personal Information
          </h2>
          <button className=" border-none ml-10 bg-[#DEEAFC] text-blue-600 cursor-pointer text-[15px] font-medium flex items-center gap-1 px-4 py-2 hover:bg-blue-50 rounded">
            <CiEdit />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <label className="text-[16px] text-gray-700 font-medium">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              defaultValue="John"
              className="px-3 py-2 border border-gray-200 rounded outline-none focus:border-blue-600 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[16px] text-gray-700 font-medium">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Tari"
              defaultValue="Tari"
              className="px-3 py-2 border border-gray-200 rounded outline-none focus:border-blue-600 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[16px] text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="ahmadjubayerr@gmail.com"
            defaultValue="ahmadjubayerr@gmail.com"
            className="px-3 py-2 border border-gray-200 rounded outline-none focus:border-blue-600 text-sm"
          />
        </div>
      </div>

      {/* Security Section */}
      <div className=" px-10 py-8 mt-5 ">
        <h2 className="text-base font-semibold text-gray-900 mb-5">Security</h2>
        <div className="flex  gap-4">
          <div className="  gap-2">
            <input
              type="password"
              placeholder="••••••••"
              value="••••••••"
              readOnly
              className="px-3 py-2 border border-gray-200 rounded bg-gray-50 text-sm"
            />
          </div>
          <button
            onClick={handleChangePasswordClick}
            className="px-5 py-2 bg-[#DEEAFC] text-blue-600 border-none rounded font-medium text-sm cursor-pointer hover:bg-blue-100 whitespace-nowrap"
          >
            Change password
          </button>
        </div>
      </div>

      {/* Change Password Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg w-full max-w-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-5 border-b border-gray-200 flex justify-between items-center">
              <button
                onClick={handleCloseModal}
                className="bg-transparent border-none text-gray-900 cursor-pointer text-base font-medium flex items-center gap-1 p-0 hover:text-blue-600"
              >
                ← Back
              </button>
              <h2 className="text-lg font-semibold text-gray-900 m-0">
                Change Password
              </h2>
              <div className="w-10"></div>
            </div>

            <div className="px-5 py-8">
              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm text-gray-700 font-medium">
                  Old password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded outline-none focus:border-blue-600 text-sm"
                />
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm text-gray-700 font-medium">
                  New password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded outline-none focus:border-blue-600 text-sm"
                />
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm text-gray-700 font-medium">
                  Confirm new password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded outline-none focus:border-blue-600 text-sm"
                />
              </div>

              <button
                onClick={handleConfirmPassword}
                className="w-full py-3 bg-blue-600 text-white border-none rounded font-semibold text-base cursor-pointer hover:bg-blue-700 active:bg-blue-800"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile_and_Setting;
