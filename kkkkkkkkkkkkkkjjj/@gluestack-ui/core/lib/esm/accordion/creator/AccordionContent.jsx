var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef, useContext } from 'react';
import { AccordionItemContext } from './Context';
export const AccordionContent = (StyledAccordionContent) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { regionProps, isExpanded } = useContext(AccordionItemContext);
    // Animation is now handled in the style file layer, not in core
    // This allows users to customize animations by modifying the style file
    return (<StyledAccordionContent ref={ref} {...props} {...regionProps}>
        {children}
      </StyledAccordionContent>);
});
//# sourceMappingURL=AccordionContent.jsx.map