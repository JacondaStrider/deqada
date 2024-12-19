import type { ThemeOptions } from "@mui/material";

const components: ThemeOptions["components"] = {
  // MuiFormControl: {
  //     defaultProps: {
  //         size: 'small',
  //     },
  // },
  // MuiAutocomplete: {
  //     defaultProps: {
  //         size: 'small',
  //     },
  // },
  // MuiButtonBase: {
  //     defaultProps: {
  //         disableRipple: true,
  //     },
  // },
  // MuiIconButton: {
  //     styleOverrides: {},
  //     defaultProps: {
  //         disableRipple: true,
  //     },
  // },
  // MuiCheckbox: {
  //     defaultProps: {
  //         size: 'small',
  //     },
  //     styleOverrides: {
  //         root({ theme }) {
  //             return {
  //                 color: theme.palette.divider,
  //             }
  //         },
  //     },
  // },
  // MuiButton: {
  //     defaultProps: {
  //         variant: 'outlined',
  //         disableElevation: true,
  //     },
  //     styleOverrides: {
  //         root() {
  //             return {
  //                 borderRadius: 20,
  //             }
  //         },
  //     },
  // },
  // MuiSelect: {
  //     defaultProps: {
  //         size: 'small',
  //     },
  //     styleOverrides: {
  //         root({ theme }) {
  //             return {
  //                 minHeight: 40,

  //                 '& input': {
  //                     fontSize: theme.typography.body2.fontSize,
  //                 },
  //                 '& textarea': {
  //                     fontSize: theme.typography.body2.fontSize,
  //                 },
  //                 '& .MuiOutlinedInput-notchedOutline': {
  //                     borderRadius: 20,
  //                     border: `1px solid ${theme.palette.divider}`,
  //                 },
  //             }
  //         },
  //     },
  // },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: "#000",
        // "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
        //   {
        //     backgroundColor: "rgba(var(--grey2), 1)",
        //   },
        // "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        //   width: "8px",
        //   maxWidth: "8px",
        //   backgroundColor: "#FFF",
        // },
        // "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        //   width: "8px",
        //   maxWidth: "8px",
        //   borderRadius: "10px",
        //   backgroundColor: "rgba(var(--grey4), 1)",
        // },
      },
    },
  },
  // MuiInputLabel: {
  //     defaultProps: {
  //         // above: false,
  //         size: 'small',
  //     },
  //     styleOverrides: {
  //         root({ theme }) {
  //             // if (ownerState.above) {
  //             //     return {
  //             //         fontWeight: 600,
  //             //         transform: 'none',
  //             //         position: 'relative',
  //             //         marginBottom: theme.spacing(1),
  //             //         fontSize: theme.typography.body2.fontSize,
  //             //         '& + .MuiInputBase-root fieldset legend': {
  //             //             width: '0',
  //             //         },
  //             //     }
  //             // }

  //             return {
  //                 fontSize: theme.typography.body2.fontSize,
  //             }
  //         },
  //     },
  // },

  // MuiTextField: {
  //     defaultProps: {
  //         size: 'small',
  //     },
  //     styleOverrides: {
  //         root({ theme }) {
  //             return {
  //                 '& .MuiInputBase-root': {
  //                     minHeight: 40,
  //                 },
  //                 '& textarea': {
  //                     fontSize: theme.typography.body2.fontSize,
  //                 },
  //                 '& .MuiInputBase-multiline .MuiOutlinedInput-notchedOutline': {
  //                     borderRadius: 20,
  //                 },
  //                 '& .MuiOutlinedInput-notchedOutline': {
  //                     borderRadius: '40px',
  //                     border: `1px solid ${theme.palette.divider}`,
  //                 },

  //                 '& input': {
  //                     // padding: '8px',
  //                     fontSize: theme.typography.body2.fontSize,
  //                     ':-internal-autofill-selected': {
  //                         borderRadius: 40,
  //                     },
  //                 },
  //             }
  //         },
  //     },
  // },
};

export default components;
