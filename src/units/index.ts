
/**
 * zmena čisla na string a nahradiť '.' za ','
 * change number to string and raplace '.' to ','
 * @param {number} number 
 * @param {string} before 
 * @param {string} after 
 * @returns string
 */
 export const replaceComma = (number: number, before: string, after: string): string => number.toString().replace(before, after)

 // prepočet m/s na km/h + zaokruhlenie
    export const msTokmh = (ms: number): number => Math.round((ms / 1000) * 3600)

/**
 * format time hh:mm AM/PM
 * @param {UTC} sec 
 * @returns string
 */
 export const sunn = (sec: number): string => {
    const date = new Date(sec * 1000)
    const timestr = date.toLocaleTimeString(['en-US'], { hour: '2-digit', minute: '2-digit' })
    return timestr
}

/**
 * calculate dayTime
 * @param sunset 
 * @param sunrise 
 * @returns 
 */  
export const dayTime = (sunset: number, sunrise: number): string => {
    const hour = Math.floor((sunset - sunrise) / 60 / 60)
    const minute = Math.ceil(((sunset - sunrise) / 60) % 60)
    return `${hour}h ${minute}m`
  }

export const dateDay = (sec: number): string => {
    const date = new Date(sec * 1000)
    const timestr = date.toLocaleDateString(['en-US'], {  weekday: 'short', day: '2-digit' })
    const array = timestr.split(" ").reverse()
    const newString = `${array[0]}, ${array[1]}`
    return newString
  }