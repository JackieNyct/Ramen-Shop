import * as THREE from 'three'
import Experience from '../Experience.js'

export default class RamenShop
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.materials = this.experience.materials

        // Debug
        if(this.debug.active)
        {
            // this.debugFolder = this.debug.ui.addFolder('ramenShop')
        }

        // Resource
        this.resource = this.resources.items.ramenShopModel

        this.parseModel()
        this.setMaterials()
    }

    parseModel()
    {
        this.model = this.resource.scene

        // Objects
        this.ramenShop = this.model.children.find(child => child.name === 'ramenShopJoined')
        this.machines = this.model.children.find(child => child.name === 'machinesJoined')
        this.floor = this.model.children.find(child => child.name === 'floor')
        this.misc = this.model.children.find(child => child.name === 'miscJoined')
        this.graphics = this.model.children.find(child => child.name === 'graphicsJoined') 
        this.jesseZhouJoined = this.model.children.find(child => child.name === 'jesseZhouJoined')

        // Moving Objects
        this.fan1 = this.model.children.find(child => child.name === 'fan1') 
        this.fan2 = this.model.children.find(child => child.name === 'fan2') 
        this.dish = this.model.children.find(child => child.name === 'dish') 
        this.dishStand = this.model.children.find(child => child.name === 'dishStand') 

        // Non-glow Lights
        this.projectsRed = this.model.children.find(child => child.name === 'projectsRed')
        this.projectsWhite = this.model.children.find(child => child.name === 'projectsWhite')
        this.articlesRed = this.model.children.find(child => child.name === 'articlesRed')
        this.articlesWhite = this.model.children.find(child => child.name === 'articlesWhite')
        this.jZhouBlack = this.model.children.find(child => child.name === 'jZhouBlack')
        this.jZhouPink = this.model.children.find(child => child.name === 'jZhouPink')
        this.aboutMeBlack = this.model.children.find(child => child.name === 'aboutMeBlack')
        this.aboutMeBlue = this.model.children.find(child => child.name === 'aboutMeBlue')
        this.creditsBlack = this.model.children.find(child => child.name === 'creditsBlack')
        this.creditsOrange = this.model.children.find(child => child.name === 'creditsOrange')
        this.greenSignSquare = this.model.children.find(child => child.name === 'greenSignSquare')
        this.blueLights = this.model.children.find(child => child.name === 'blueLights')
        this.yellowRightLight = this.model.children.find(child => child.name === 'yellowRightLight')
        this.whiteButton = this.model.children.find(child => child.name === 'whiteButton')
        this.redLED = this.model.children.find(child => child.name === 'redLED')
        this.greenLED = this.model.children.find(child => child.name === 'greenLED')
        

        // Glow Lights
        this.chinese = this.model.children.find(child => child.name === 'chinese') 
        this.neonBlue = this.model.children.find(child => child.name === 'neonBlue')
        this.neonPink = this.model.children.find(child => child.name === 'neonPink')
        this.neonYellow = this.model.children.find(child => child.name === 'neonYellow')
        this.neonGreen = this.model.children.find(child => child.name === 'neonGreen')
        this.portalLight = this.model.children.find(child => child.name === 'portalLight')
        this.storageLight = this.model.children.find(child => child.name === 'storageLight')
        this.poleLight = this.model.children.find(child => child.name === 'poleLight')
        this.arcadeRim = this.model.children.find(child => child.name === 'arcadeRim')
        this.vendingMachineLight = this.model.children.find(child => child.name === 'vendingMachineLight')
        this.arcadeToken = this.model.children.find(child => child.name === 'arcadeToken')
        this.lampLights = this.model.children.find(child => child.name === 'lampLights')

        // Screens
        this.bigScreen = this.model.children.find(child => child.name === 'bigScreen')
        this.tallScreen = this.model.children.find(child => child.name === 'tallScreen')
        this.sideScreen = this.model.children.find(child => child.name === 'sideScreen')
        this.arcadeScreen = this.model.children.find(child => child.name === 'arcadeScreen')
        this.tvScreen = this.model.children.find(child => child.name === 'tvScreen')
        this.littleTVScreen = this.model.children.find(child => child.name === 'littleTVScreen')

        this.vendingMachineScreen = this.model.children.find(child => child.name === 'vendingMachineScreen')

    }

    setMaterials()
    {
        // Set Materials
        this.resources.on('texturesMapped', () =>
        {
            // Objects
            this.ramenShop.material = this.materials.ramenShopMaterial
            this.machines.material = this.materials.machinesMaterial
            this.floor.material = this.materials.floorMaterial
            this.misc.material = this.materials.miscMaterial
            this.graphics.material = this.materials.graphicsMaterial
            this.jesseZhouJoined.material = this.materials.whiteSignMaterial

            // Moving Objects
            this.fan1.material = this.materials.fanMatcapMaterial
            this.fan2.material = this.materials.fanMatcapMaterial
            this.dish.material = this.materials.dishMatcapMaterial
            this.dishStand.material = this.materials.dishMatcapMaterial

            // Non-glow Lights
            this.projectsRed.material = this.materials.redSignMaterial
            this.projectsWhite.material = this.materials.whiteSignMaterial
            this.articlesWhite.material = this.materials.whiteSignMaterial
            this.articlesRed.material = this.materials.redSignMaterial
            this.jZhouBlack.material = this.materials.blackSignMaterial
            this.jZhouPink.material = this.materials.pinkSignMaterial
            this.aboutMeBlack.material = this.materials.blackSignMaterial
            this.aboutMeBlue.material = this.materials.blueSignMaterial
            this.creditsBlack.material = this.materials.blackSignMaterial
            this.creditsOrange.material = this.materials.orangeSignMaterial
            this.greenSignSquare.material = this.materials.greenSignMaterial
            this.blueLights.material = this.materials.blueSignMaterial
            this.yellowRightLight.material = this.materials.orangeSignMaterial
            this.whiteButton.material = this.materials.whiteSignMaterial
            this.redLED.material = this.materials.redLedMaterial
            this.greenLED.material = this.materials.greenLedMaterial
        
            // Glow lights
            this.chinese.material = this.materials.greenSignMaterial
            this.neonBlue.material = this.materials.neonBlueMaterial
            this.neonPink.material = this.materials.neonPinkMaterial
            this.neonYellow.material = this.materials.neonYellowMaterial
            this.neonGreen.material = this.materials.neonGreenMaterial
            this.portalLight.material = this.materials.neonBlueMaterial
            this.storageLight.material = this.materials.neonBlueMaterial
            this.poleLight.material = this.materials.poleLightMaterial
            this.arcadeRim.material = this.materials.neonBlueMaterial
            this.vendingMachineLight.material = this.materials.whiteSignMaterial
            this.arcadeToken.material = this.materials.redLedMaterial
            this.lampLights.material = this.materials.whiteSignMaterial

            // Screens
            this.bigScreen.material = this.materials.bigScreenMaterial
            this.arcadeScreen.material = this.materials.arcadeScreenMaterial
            this.littleTVScreen.material = this.materials.littleTVScreenVideoMaterial
            this.tallScreen.material = this.materials.tallScreenVideoMaterial
            // this.tvScreen.material = this.materials.tvScreenVideoMaterial

            this.vendingMachineScreen.material = this.materials.vendingMachineScreenMaterial


        })

        this.model.position.y = - 3
        this.scene.add(this.model)
    }
}