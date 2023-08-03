"use client"
import { Dispatch, SetStateAction } from "react";

import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import * as Popover from '@radix-ui/react-popover';

interface DatePickerFormProps {
    selected: Date | undefined,
    setSelected: Dispatch<SetStateAction<Date | undefined>>
}

export function DatePickerForm({ selected, setSelected }: DatePickerFormProps) {

    // set footer if date selected
    let footer;
    if (selected) {
        footer = <p>Du hast den {format(selected, "PP", { locale: de })} ausgewählt.</p>;
    }

    // css styles for date picker
    const css = `
    .selected:not([disabled]) { 
        font-weight: bold; 
        border: 2px solid currentColor;
        color: white;
        font-size: 120%;
        transition: font-size .1s ease-in-out;
    }
    .selected:hover:not([disabled]) { 
        border-color: white;
        color: white;
    }
    .today { 
        text-decoration: underline;
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
        background-color: black;
        border: 2px solid white;
    }
    .rdp-button:focus-visible:not([disabled]) {
        color: inherit;
        background-color: black;
        border: 2px solid white;
    }
    .outside {
        opacity: .5;
    }
    .disabled {
        font-size: 80%;
        color: white;
    }
`;

    return (
        <>
            <style>{css}</style>
            <Popover.Root>
                <Popover.Trigger asChild>
                    <button className="daisy_btn w-full text-white border border-white hover:text-black hover:bg-white">
                        {selected ? format(selected, 'PPPP', { locale: de }) : "Wähle das Event Datum aus"}
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content>
                        <DayPicker
                            mode="single"
                            locale={de}
                            required
                            selected={selected}
                            onSelect={setSelected as SelectSingleEventHandler}
                            fromDate={new Date()}
                            toYear={new Date().getFullYear() + 1}
                            showOutsideDays
                            fixedWeeks
                            footer={footer}
                            modifiersClassNames={{
                                selected: "selected",
                                today: "today",
                                outside: "outside",
                                disabled: "disabled",
                                nav_button_next: "nav-next"
                            }}
                            styles={{
                                caption: { color: "white", backgroundColor: "black" },
                                head: { color: "white" },
                                table: { backgroundColor: "black" }
                            }}
                            className="font-text border border-white"
                        />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>

        </>
    )
}
