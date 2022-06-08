<script setup lang="ts">

const c = ref<HTMLCanvasElement>()

const gridColor = "#D9D9D9"
const msGridColor = "#F0F0F0"
const initColor = "#000000"
const mSecLineColor = "#8C8C8C"

const MULTIPLE = 0.5

function getMultiple(ctx:CanvasRenderingContext2D){
    return MULTIPLE
}

function draw(){
     c.value.width = 700
     c.value.height = 400
    let ctx = c.value.getContext('2d')
   

    let gridSize = 15
    for(let i =0; i < c.value.height; i += gridSize){
        ctx.moveTo(0,i)
        ctx.lineTo(c.value.width,i)
        ctx.stroke()
    }

    for(let i =0; i < c.value.width; i += gridSize){
        ctx.moveTo(i,0)
        ctx.lineTo(i,c.value.width)
        ctx.stroke()
    }

    
}
onMounted(()=>{
    
    draw()
})

</script>

<template>
<div>
    <button >grow</button>
    <canvas ref="c"></canvas>
</div>
</template>