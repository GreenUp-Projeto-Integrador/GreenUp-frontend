import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import svgPaths from "../views/svg-uyo7dsva7d";
function Component1() {
  return _jsx("div", {
    className: "absolute inset-[0_20.21%_6.52%_0]",
    "data-name": "_1993560858768",
    children: _jsx("svg", {
      className: "absolute block size-full",
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 55.8518 68.2407",
      children: _jsxs("g", {
        id: "_1993560858768",
        children: [
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p3a758080,
            fill: "var(--fill-0, #114B54)",
            fillRule: "evenodd",
            id: "Vector",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p3f4076b0,
            fill: "var(--fill-0, #FAEDE1)",
            fillRule: "evenodd",
            id: "Vector_2",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.pae79970,
            fill: "var(--fill-0, #114B54)",
            fillRule: "evenodd",
            id: "Vector_3",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p3d8bfa00,
            fill: "var(--fill-0, #F8C78D)",
            fillRule: "evenodd",
            id: "Vector_4",
          }),
        ],
      }),
    }),
  });
}
function Component() {
  return _jsx("div", {
    className: "absolute inset-[37.11%_0_0_50.93%]",
    "data-name": "_1993560857360",
    children: _jsx("svg", {
      className: "absolute block size-full",
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 34.3493 45.9115",
      children: _jsxs("g", {
        id: "_1993560857360",
        children: [
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p2823b800,
            fill: "var(--fill-0, #B8502B)",
            fillRule: "evenodd",
            id: "Vector",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p2e43f300,
            fill: "var(--fill-0, #6F9A7C)",
            fillRule: "evenodd",
            id: "Vector_2",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p2ad63b00,
            fill: "var(--fill-0, #FBF8F3)",
            fillRule: "evenodd",
            id: "Vector_3",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p27ca2000,
            fill: "var(--fill-0, #FC7D08)",
            fillRule: "evenodd",
            id: "Vector_4",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p2e681320,
            fill: "var(--fill-0, #FBF8F3)",
            fillRule: "evenodd",
            id: "Vector_5",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p3b25200,
            fill: "var(--fill-0, #FBF8F3)",
            fillRule: "evenodd",
            id: "Vector_6",
          }),
          _jsx("path", {
            clipRule: "evenodd",
            d: svgPaths.p18dae000,
            fill: "var(--fill-0, #FBF8F3)",
            fillRule: "evenodd",
            id: "Vector_7",
          }),
        ],
      }),
    }),
  });
}
function GMark() {
  return _jsx("div", {
    className: "absolute inset-[25.58%_71.46%_24.75%_22.35%]",
    "data-name": "G Mark 4",
    children: _jsx("svg", {
      className: "absolute block size-full",
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 21.0523 21.3555",
      children: _jsxs("g", {
        id: "G Mark 4",
        children: [
          _jsx("path", {
            d: svgPaths.p19780000,
            fill: "var(--fill-0, #4285F4)",
            id: "Blue 500",
          }),
          _jsx("path", {
            d: svgPaths.pfe3f700,
            fill: "var(--fill-0, #34A853)",
            id: "Green 500 1",
          }),
          _jsx("path", {
            d: svgPaths.p19ca9900,
            fill: "var(--fill-0, #FABB05)",
            id: "Yellow 500 1",
          }),
          _jsx("path", {
            d: svgPaths.p2c55be00,
            fill: "var(--fill-0, #E94235)",
            id: "Red 500",
          }),
        ],
      }),
    }),
  });
}
export default function InteractiveCadastro({
  onCadastro,
  onGoogleLogin,
  onSwitchToLogin,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onCadastro(
      formData.name,
      formData.email,
      formData.password,
      formData.confirmPassword,
    );
  };
  return _jsxs("div", {
    className: "bg-white relative size-full",
    "data-name": "Cadastro",
    children: [
      _jsxs("div", {
        className: "absolute h-[73px] left-[101px] top-[69px] w-[70px]",
        "data-name": "Logo",
        children: [_jsx(Component1, {}), _jsx(Component, {})],
      }),
      _jsx("div", {
        className:
          "absolute content-stretch flex items-center justify-center left-[184px] top-[82px]",
        "data-name": "GreenUp",
        children: _jsx("div", {
          className:
            "flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f9a7c] text-[32px] text-center whitespace-nowrap",
          children: _jsx("p", {
            className: "leading-[normal]",
            children: "GreenUp",
          }),
        }),
      }),
      _jsxs("div", {
        className: "absolute h-[61px] left-[40px] top-[171px] w-[350px]",
        "data-name": "Login/cadastro",
        children: [
          _jsx("div", {
            className: "absolute bg-[#f8f8f8] inset-0 rounded-[32px]",
          }),
          _jsx("button", {
            className:
              "absolute bg-[#f8c78d] inset-[10.29%_2%_10.29%_53.43%] rounded-[35px] cursor-pointer",
            onClick: () => {},
          }),
          _jsx("button", {
            className:
              "absolute content-stretch flex inset-[27.94%_29.57%_27.94%_-23.57%] items-center justify-center cursor-pointer hover:opacity-80 transition-opacity",
            onClick: onSwitchToLogin,
            children: _jsx("div", {
              className:
                "flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-black whitespace-nowrap",
              children: _jsx("p", {
                className: "leading-[30px]",
                children: "Login",
              }),
            }),
          }),
          _jsx("button", {
            className:
              "absolute content-stretch flex inset-[27.94%_-22.71%_27.94%_28.71%] items-center justify-center cursor-pointer",
            onClick: () => {},
            children: _jsx("div", {
              className:
                "flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-black whitespace-nowrap",
              children: _jsx("p", {
                className: "leading-[30px]",
                children: "Cadastrar",
              }),
            }),
          }),
        ],
      }),
      _jsxs("form", {
        onSubmit: handleSubmit,
        children: [
          _jsxs("div", {
            className:
              "absolute content-stretch flex flex-col gap-[5px] h-[79px] items-start left-[32px] px-[13px] py-px top-[257px] w-[366px]",
            children: [
              _jsx("label", {
                className:
                  "font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap",
                children: "Nome",
              }),
              _jsx("input", {
                type: "text",
                value: formData.name,
                onChange: (e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value })),
                placeholder: "Nome Completo",
                className:
                  "h-[42px] w-[340px] rounded-[10px] border-[#d9d9d9] border-[1.5px] border-solid px-4 font-['Poppins:Medium',sans-serif] text-[15px] text-black placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#6f9a7c]",
              }),
            ],
          }),
          _jsxs("div", {
            className:
              "absolute content-stretch flex flex-col gap-[5px] h-[79px] items-start left-[32px] px-[13px] py-px top-[349px] w-[366px]",
            children: [
              _jsx("label", {
                className:
                  "font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap",
                children: "E-mail",
              }),
              _jsx("input", {
                type: "email",
                value: formData.email,
                onChange: (e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value })),
                placeholder: "nome@gmail.com",
                className:
                  "h-[42px] w-[340px] rounded-[10px] border-[#d9d9d9] border-[1.5px] border-solid px-4 font-['Poppins:Medium',sans-serif] text-[15px] text-black placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#6f9a7c]",
              }),
            ],
          }),
          _jsxs("div", {
            className:
              "absolute content-stretch flex flex-col gap-[5px] h-[79px] items-start left-[32px] px-[13px] py-px top-[441px] w-[366px]",
            children: [
              _jsx("label", {
                className:
                  "font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap",
                children: "Senha",
              }),
              _jsxs("div", {
                className: "relative w-[340px]",
                children: [
                  _jsx("input", {
                    type: showPassword ? "text" : "password",
                    value: formData.password,
                    onChange: (e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      })),
                    placeholder: "***",
                    className:
                      "h-[42px] w-full rounded-[10px] border-[#d9d9d9] border-[1.5px] border-solid px-4 pr-12 font-['Poppins:Medium',sans-serif] text-[15px] text-black placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#6f9a7c]",
                  }),
                  _jsx("button", {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    className:
                      "absolute right-3 top-1/2 -translate-y-1/2 text-[#a3a3a3] hover:text-[#6f9a7c]",
                    children: showPassword
                      ? _jsx(EyeOff, { size: 19 })
                      : _jsx(Eye, { size: 19 }),
                  }),
                ],
              }),
            ],
          }),
          _jsxs("div", {
            className:
              "absolute content-stretch flex flex-col gap-[5px] h-[79px] items-start left-[32px] px-[13px] py-px top-[533px] w-[366px]",
            children: [
              _jsx("label", {
                className:
                  "font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap",
                children: "Confirma\u00E7\u00E3o de senha",
              }),
              _jsxs("div", {
                className: "relative w-[340px]",
                children: [
                  _jsx("input", {
                    type: showConfirmPassword ? "text" : "password",
                    value: formData.confirmPassword,
                    onChange: (e) =>
                      setFormData((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      })),
                    placeholder: "***",
                    className:
                      "h-[42px] w-full rounded-[10px] border-[#d9d9d9] border-[1.5px] border-solid px-4 pr-12 font-['Poppins:Medium',sans-serif] text-[15px] text-black placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#6f9a7c]",
                  }),
                  _jsx("button", {
                    type: "button",
                    onClick: () => setShowConfirmPassword(!showConfirmPassword),
                    className:
                      "absolute right-3 top-1/2 -translate-y-1/2 text-[#a3a3a3] hover:text-[#6f9a7c]",
                    children: showConfirmPassword
                      ? _jsx(EyeOff, { size: 19 })
                      : _jsx(Eye, { size: 19 }),
                  }),
                ],
              }),
            ],
          }),
          _jsx("button", {
            type: "submit",
            className:
              "absolute bg-[#f8c78d] h-[43px] left-[45px] rounded-[20px] top-[625px] w-[340px] hover:bg-[#f7bb7a] transition-colors cursor-pointer",
            children: _jsx("div", {
              className:
                "font-['Poppins:Medium',sans-serif] text-[17px] text-black",
              children: "Confirmar",
            }),
          }),
        ],
      }),
      _jsxs("div", {
        className: "absolute h-[15px] left-[35px] top-[683px] w-[360px]",
        children: [
          _jsx("div", {
            className:
              "absolute flex inset-[53.33%_53.33%_46.67%_2.86%] items-center justify-center",
            children: _jsx("div", {
              className: "flex-none h-px rotate-180 w-[134.94px] bg-[#C5C5C5]",
            }),
          }),
          _jsx("div", {
            className:
              "absolute flex inset-[53.33%_2.76%_46.67%_53.43%] items-center justify-center",
            children: _jsx("div", {
              className: "flex-none h-px rotate-180 w-[134.94px] bg-[#C5C5C5]",
            }),
          }),
          _jsx("div", {
            className:
              "absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[0_47.54%_0_47.63%] justify-center leading-[0] not-italic text-[#c5c5c5] text-[12px] text-center",
            children: _jsx("p", {
              className: "leading-[normal]",
              children: "ou",
            }),
          }),
        ],
      }),
      _jsxs("button", {
        type: "button",
        onClick: onGoogleLogin,
        className:
          "absolute h-[43px] left-[45px] top-[713px] w-[340px] hover:opacity-90 transition-opacity cursor-pointer",
        children: [
          _jsx("div", {
            className:
              "absolute bg-[#f7f7f7] inset-0 rounded-[40px] shadow-[0px_4px_9px_0px_rgba(0,0,0,0.15)]",
          }),
          _jsx(GMark, {}),
          _jsx("p", {
            className:
              "absolute font-['Poppins:Regular',sans-serif] inset-[20.93%_22.06%_27.91%_31.47%] leading-[normal] not-italic text-[17px] text-[rgba(0,0,0,0.45)]",
            children: "Login com Google",
          }),
        ],
      }),
    ],
  });
}
