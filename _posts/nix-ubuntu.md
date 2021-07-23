---
title: Cómo empezar a usar nix
---

Empezar por la sección de declarative package management: https://nixos.org/manual/nixpkgs/stable/#sec-declarative-package-management

extrapolando de esa entrada de la docu:

Si en `.config/nixpkgs/config.nix ` tenemos:
```
{
  packageOverrides = pkgs: with pkgs; {
    base = pkgs.buildEnv {
      name = "base";
      paths = [
        jq
      ];
    };
  };
}

```
entonces `nix-env -i base` instala jq. `nix-env -e base` desinstala jq. Esto lo podemos hacer para todas las cosas.

Divertido pero inutil! Alacritty sólo puede instalarse usando home-manager, y parece que todo el mundo lo usa! https://github.com/nix-community/home-manager

Home-manager es una herramienta re específica que unicamente soporta cierto software! Paso en falso. No. Es un paso en la dirección correcta parece.

Repo de referencia para configuración: https://github.com/bbenne10/nix

USA HOME MANAGER. Todo el mundo usa Home Manager. Configura dwm de una forma muy copada, especificando el package.
