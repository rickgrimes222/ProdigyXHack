import type { JSX } from "preact"
import swal, { SweetAlertInput, SweetAlertOptions } from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const Swal = withReactContent(swal)

export class ArgumentFailureError extends Error {
    override name = "ArgumentFailureError"
}

export interface SwalInput {
    value: string | JSX.Element
    input?: SweetAlertInput
    title?: string | JSX.Element
    placeholder?: string
    validator?: (value: string) => string | null | undefined
    swalOptions?: SweetAlertOptions
}

export async function swalInput ({ value, input = "text", title, placeholder, validator = () => null, swalOptions = {} }: SwalInput) {
    const inputResponse = await Swal.fire({
        title: title ?? "Enter a value",
        html: value,
        input: input ?? "text",
        inputPlaceholder: placeholder ?? "Enter a value",
        inputValidator: value => (value.trim() ? validator(value) : "Please enter a value."),
        showCancelButton: true,
        ...swalOptions
    })
    if (inputResponse.dismiss) throw new ArgumentFailureError()
    return inputResponse.value
}

export namespace InputTypes {
    export async function string (value: string) {
        return String(await swalInput({ value }))
    }

    export async function integer (value: string, min = 0, max = Infinity) {
        return parseInt(await swalInput({ value, input: "number", validator: value => (value.trim() ? (parseInt(value) >= min && parseInt(value) <= max ? null : `Please enter a value between ${min} and ${max}.`) : "Please enter a value.") }))
    }

    export async function float (value: string) {
        return parseFloat(await swalInput({ value, input: "text", validator: value => isNaN(parseFloat(value)) ? "Please enter a decimal." : null }))
    }

    export async function select (value: string, options: string[]) {
        return parseInt(await swalInput({ value, title: "Select a value", input: "select", placeholder: "Select...", validator: value => value ? "" : "Please select which you'd like to obtain.", swalOptions: { confirmButtonText: "Select", inputOptions: options } }))
    }
}

export const success = (value: string) =>
    Swal.fire({
        title: "Success!",
        text: value,
        icon: "success",
        toast: true,
        position: "bottom"
    })

export const error = (error: string) =>
    Swal.fire({
        title: "An Error Occured!",
        text: error,
        icon: "error",
        toast: true,
        position: "bottom"
    })

export const confirm = async (value: string) =>
    !(await Swal.fire({
        title: "Are you sure?",
        text: value,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel"
    })).isDismissed
