
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Lista1 } from "./list2"
import { List3a } from "./List3"
import TextSlider from "./text-slider"

 function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Front Body</TabsTrigger>
        <TabsTrigger value="password">Settings</TabsTrigger>
        <TabsTrigger value="slider">Slider</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <List3a/>
      </TabsContent>
      <TabsContent value="password">
      <Lista1/>
      </TabsContent>
      <TabsContent value="slider">
      <TextSlider options={[2,3,4]}/>
      </TabsContent>
    </Tabs>
  )
}
export default TabsDemo