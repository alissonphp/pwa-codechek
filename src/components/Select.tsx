import { Select as SelectChakra, SelectProps } from "@chakra-ui/react";

interface Props extends SelectProps {}

export function Select({ children, ...rest } : Props){
  return(
    <SelectChakra
      bg="#292D320F"
      size={"lg"}
      borderRadius={"0.25rem"}
      color="textBlack"
      opacity={"0.54"}
      border={"none"}
      borderBottom={'3px solid #ECAB0F'}
      {...rest}
    >
      {children}
    </SelectChakra>
  )
}