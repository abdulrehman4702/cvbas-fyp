"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    pH: "",
    K: "",
    OM: "",
    EC: "",
    P: "",
    N: "",
  });
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit_image = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:9090/upload/yolo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data.result);
      setError(null);
    } catch (err) {
      setError("Error uploading file");
      console.error(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:9090/predict",
        new URLSearchParams(formData).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError("Error submitting form");
      console.error(err);
    }
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-green-500 h-screen justify-center flex items-center">
      <Tabs defaultValue="withvalues" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="withvalues">Values</TabsTrigger>
          <TabsTrigger value="withimage">Image</TabsTrigger>
        </TabsList>
        <TabsContent value="withvalues">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Enter Values</CardTitle>
                <CardDescription>Enter the following values</CardDescription>
              </CardHeader>
              <CardContent className="flex  2xl:flex-wrap flex-row space-x-3 ">
                <div>
                  <div className="space-y-1">
                    <Label htmlFor="email">PH</Label>
                    <Input
                      type="number"
                      name="pH"
                      value={formData.pH}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Potassium</Label>
                    <Input
                      type="number"
                      name="K"
                      value={formData.K}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Organic Matter</Label>
                    <Input
                      type="number"
                      name="OM"
                      value={formData.OM}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Electric Conductivity</Label>
                    <Input
                      type="number"
                      name="EC"
                      value={formData.EC}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Phosphrous</Label>
                    <Input
                      type="number"
                      name="P"
                      value={formData.P}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Nitrogen</Label>
                    <Input
                      type="number"
                      name="N"
                      value={formData.N}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
        <TabsContent value="withimage">
          <Card>
            <CardHeader>
              <CardTitle>Select Image</CardTitle>
              <CardDescription>Please select a file</CardDescription>
            </CardHeader>
            <CardContent className=" space-y-2">
              <form className="space-y-2" onSubmit={handleSubmit_image}>
                <div className="space-y-1">
                  <Label htmlFor="current">Image</Label>
                  <input type="file" id="image" onChange={handleFileChange} />
                </div>
                <Button type="submit" className="w-full">
                  Upload
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className={`${result ? "flex" : "hidden"} flex-col m-3`}>
        <CardHeader>
          <CardTitle>Result</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {result && (
            <>
              <div>
                <p className="text-green-600 ">{result.message}</p>
                <p>{result.predicted_crop}</p>
              </div>
              <ul>
                {Object.entries(result).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
